const apiKey ="7cc68bcd23df12966825001173e90c96" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const conf = document.getElementById("confirm");
const searchInput = document.getElementById("search");
const prediction = document.getElementById("prediction");
const loc = document.getElementById("location");
const humidity = document.getElementById("humidity");
const temperature = document.getElementById("deg");
const errorServ = document.querySelector(".error");
const displayWeather = document.querySelector(".disp");
const loader=document.getElementById("preloader")
const errorServer=document.getElementById("errorServer");
const errorMsg=document.getElementById("errorMsg");
const checkInternet=document.getElementById("checkInternet");

const imageUrlsToPreload = [
  "background/Thunderstorm.jpg",
  "background/Drizzle.jpg",
  "background/Rain.jpg",
  "background/Snow.jpg",
  "background/Mist.jpg",
  "background/Fog.jpg",
  "background/Sunny.jpg",
  "background/Clouds.jpg",
  "Icons/storm.png",
  "Icons/rain.png",
  "Icons/snow.png",
  "Icons/clouds.png",
  "Icons/sun.png"
];


function preloadImages(imageUrls, callback) {
  const images = [];
  let loadedImages = 0;

  for (const imageUrl of imageUrls) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
          loadedImages++;
          if (loadedImages === imageUrls.length) {
              callback();
          }
      };
      images.push(img);
  }
}

window.addEventListener("load", function () {
  loader.style.display = "block";
  preloadImages(imageUrlsToPreload, () => {
      loader.style.display = "none";
  });
GeolocationData()
});



function setWeatherStyles(weatherData) {
  const body = document.body.style;
  const dispStyles = displayWeather.style;
  const searchStyles = searchInput.style;
  const confStyles = conf.style;

  let bodyBackground = "";
  let dispTextColor = "";
  let dispBorderColor = "";
  let dispBackground = "";
  let dispBoxShadow = "";
  let searchColor = "";
  let searchBorder="";
  let confColor = "";
  let confBackground = "";
  let confBorder="";

switch (weatherData.weather[0].main) {
case "Thunderstorm":
    bodyBackground = "url(background/Thunderstorm.jpg) no-repeat center center/cover";
    dispTextColor = "rgb(31, 33, 36)";
    dispBorderColor = "rgba(64, 65, 65, 0.3)";
    dispBackground = "rgba(61, 61, 61, 0.062)";
    dispBoxShadow = "-5px 5px 60px 5px #4141412d";
    searchColor = "#F9F9FF";
    confColor = "rgb(255, 255, 255)";
    confBackground = "rgba(80, 80, 80, 0.295)";
    prediction.src="Icons/storm.png"
    break;
    case "Drizzle":
    bodyBackground = "url(background/Drizzle.jpg) no-repeat center center/cover";
    dispTextColor = "#00ff0d";
    dispBorderColor = "rgba(175, 175, 175, 0.3)";
    dispBackground = "rgba(104, 104, 104, 0.062)";
    dispBoxShadow = "-5px 5px 60px 5px #1dbb252d";
    searchColor = "#00ff0d";
    confColor = "#00ff0d";
    confBackground = "rgba(80, 80, 80, 0.295)";
    prediction.src="Icons/rain.png"
    break;
    case "Rain":
    bodyBackground = "url(background/Rain.jpg) no-repeat center center/cover";
    dispTextColor = "rgb(66, 25, 212)";
    dispBorderColor = "rgba(175, 175, 175, 0.3)";
    dispBackground = "rgba(61, 14, 138, 0.062)";
    dispBoxShadow = "-5px 5px 60px 5px #3002312d";
    searchColor = "rgb(8, 108, 196)";
    confColor = "rgb(89, 0, 255)";
    confBackground = "rgba(183, 0, 255, 0.103)";
    prediction.src="Icons/rain.png"
    break;
    case "Snow":
    bodyBackground = "url(background/Snow.jpg) no-repeat center center/cover";
    dispTextColor = "rgb(255, 255, 255)";
    dispBorderColor = "1px solid rgba(0, 219, 235, 0.3)";
    dispBackground = "rgba(0, 204, 255, 0.062)";
    dispBoxShadow = "-5px 5px 60px 5px #00e1ff2d";
    searchColor = "white";
    searchBorder="1px solid rgb(0, 195, 255)";
    confColor = "rgb(255, 255, 255)";
    confBackground = "rgba(80, 80, 80, 0.295)";
    prediction.src="Icons/snow.png"
    break;
    case "Mist":
    bodyBackground = "url(background/Mist.jpg) no-repeat center center/cover";
    dispTextColor = "rgb(31, 33, 36)";
    dispBorderColor = "rgba(64, 65, 65, 0.3)";
    dispBackground = "rgba(61, 61, 61, 0.062)";
    dispBoxShadow = "-5px 5px 60px 5px #4141412d";
    searchColor = "rgb(31, 33, 36)";
    searchBorder="1px solid rgb(80, 80, 80)";
    confColor = "rgb(255, 255, 255)";
    confBackground = "rgba(80, 80, 80, 0.295)";
    prediction.src="Icons/clouds.png"
    break;
    case "Fog":
    bodyBackground = "url(background/Fog.jpg) no-repeat center center/cover";
    dispTextColor = "rgb(218, 221, 255)";
    dispBorderColor = "rgba(64, 65, 65, 0.3)";
    dispBackground = "rgba(61, 61, 61, 0.062)";
    dispBoxShadow = "-5px 5px 60px 5px #4141412d";
    searchColor = "rgb(218, 221, 255)";
    searchBorder="1px solid rgb(80, 80, 80)";
    confColor = "rgb(255, 255, 255)";
    confBackground = "rgba(80, 80, 80, 0.295)";
    confBorder="1px solid rgb(68, 68, 68)";
    prediction.src="Icons/clouds.png"
    break;
    case "Clear":
    bodyBackground = "url(background/Sunny.jpg) no-repeat center center/cover";
    dispTextColor = "#ff6421";
    dispBorderColor = "rgba(255, 168, 6, 0.3)";
    dispBackground = "rgba(226, 128, 1, 0.116)";
    dispBoxShadow = "-5px 5px 60px 5px #ffb01c2d";
    searchColor = "#ff6421";
    searchBorder="1px solid rgb(248, 160, 28)";
    confColor = "rgb(255, 238, 0)";
    confBackground = "rgba(255, 108, 23, 0.295)";
    confBorder="1px solid rgb(248, 160, 28)";
    prediction.src="Icons/sun.png"
    break;
    default:
    bodyBackground = "url(background/Clouds.jpg) no-repeat center center/cover";
    dispTextColor = "rgb(48, 48, 48)";
    dispBorderColor = "rgba(175, 175, 175, 0.3)";
    dispBackground = "rgba(134, 134, 134,0.3)";
    prediction.src="Icons/clouds.png"
    conf.addEventListener("mouseenter", () => {
        confColor = "rgb(80, 80, 80)";
        confBackground = "white";
    });
    conf.addEventListener("mouseleave", () => {
        confColor = "white";
        confBackground = "rgba(80, 80, 80,0.3)";
    });
    break;
}
body.background = bodyBackground;
dispStyles.color = dispTextColor;
dispStyles.border = `1px solid ${dispBorderColor}`;
dispStyles.background = dispBackground;
dispStyles.boxShadow = dispBoxShadow;
searchStyles.color = searchColor;
confStyles.color = confColor;
confStyles.background = confBackground;
confStyles.border=confBorder;
searchStyles.border=searchBorder;
}

function handleNameNotResolvedError() {
  loader.style.display = "block"; 
  checkInternet.style.display = "block"; 
  displayWeather.style.display = "none"; 
}

async function getWeather(city) {
  loader.style.display = "block";
 
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 404 || response.status === 429) {
        loader.style.display = "none";
        errorServ.style.display = "block";
        displayWeather.style.display = "none";
    } else {
        displayData(data);
        setWeatherStyles(data);
    }
} catch (error) {
    handleNameNotResolvedError();
  }
}








function updateDate() {
  const now = new Date();
  date.textContent = now.toLocaleString();
}

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (searchInput.value.trim()===""){
      return
    }
    getWeather(searchInput.value);
  }
});

conf.addEventListener("click", () => {
    if (searchInput.value.trim()===""){
      return
    }
  getWeather(searchInput.value);
});

function GeolocationData() {
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(async function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`);
      const data = await response.json();
      if (response.status === 404) {
        return;
      } else {
        displayData(data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });
} else {
  console.error("Geolocation is not available.");
}
}

function displayData(data){
  loader.style.display = "none";
  errorServ.style.display = "none";
  displayWeather.style.display = "flex";
  loc.textContent = data.name;
  humidity.textContent = data.main.humidity + "%";
  temperature.textContent = Math.round(data.main.temp) + "°c";
}

updateDate();
setInterval(updateDate, 1000);
console.log("All images by pixabay , Freepik and Giphy");

