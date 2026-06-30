const apiKey = "6bb60b2aa32845be938120054262405";
const apiUrl = "http://api.weatherapi.com/v1/current.json?&aqi=no&q=";

let input = document.querySelector("#search");
let searchBtn = document.querySelector(".searchBtn");
let weatherIcon = document.querySelector(".weather img");

async function check(city) {
  const responce = await fetch(apiUrl + city + `&key=${apiKey}`);
  const data = await responce.json();
  console.log(data);

  document.querySelector(".temp").innerHTML =
    Math.round(data["current"]["temp_c"]) + "°C";

  document.querySelector(".name").innerHTML = data["location"]["name"];

  // wind
  document.querySelector(".wind").innerHTML = data.current.wind_kph + " Kph/h";

  // humidity
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";

  // change the icon of the weather
  const condition = data.current.condition.text;
  if (condition === "Clear") {
    weatherIcon.src = "images/sun.png";
  } else if (condition === "Partly Cloudy") {
    weatherIcon.src = "images/cloud.png";
  } else if (condition === "Patchy rain nearby") {
    weatherIcon.src = "images/cloudy.png";
  } else if (condition === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (condition === "Rain") {
    weatherIcon.src = "images/heavy-rain.png";
  } else if (condition === "Drizzle") {
    weatherIcon.src = "images/light-rain.png";
  } else if (condition === "Snow") {
    weatherIcon.src = "images/snowflake.png";
  } else if (condition === "Storm") {
    weatherIcon.src = "images/storm.png";
  }
}
// get the name of the city or country
searchBtn.addEventListener("click", function () {
  check(input.value);
  input.value = "";
});
