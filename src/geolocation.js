const API_KEY = "0f49bec193d161831181d7d6ef4c846b";

const weatherContainer = document.querySelector(".nav__weather");
const city = weatherContainer.querySelector(".nav__weather--city");

const temp = weatherContainer.querySelector(".nav__weather--temp");
const emoji = weatherContainer.querySelector(".nav__weather--emoji");

const COORDS = "coords";
//////////////////////////////////////////////////////////////////
let temperature, weather;

const getWeather = function (lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      temperature = data.main.temp;

      weather = data.weather[0].main;
      console.log(data);
      const country = data.sys.country;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
    })
    .then((res) => res.json())
    .then((data) => {
      const ctry = data.name;

      city.textContent = `${ctry},`;
      temp.textContent = `${weather} ${temperature}°C`;
    });
};

const saveCoords = function (coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSuccess = function (position) {
  const { latitude: lat, longitude: lng } = position.coords;
  const coordsObj = { lat, lng };

  saveCoords(coordsObj);
  getWeather(lat, lng);
};

const handleGeoError = function () {
  console.log(`Can't get geolocation.`);
};

const askForCoords = function () {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadCoords = function () {
  const loadedCoord = localStorage.getItem(COORDS);

  if (loadedCoord === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoord);
    const { lat, lng } = parsedCoords;
    getWeather(lat, lng);
  }
};
//////////////////////////////////////////////////////////////////

function init() {
  loadCoords();
}

init();
