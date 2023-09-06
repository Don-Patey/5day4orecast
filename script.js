// starting variables declated and input of person API key
var weatherApiKey = "cf6175175fe5277a53e5cac601d3de9d";
var cityContainerList = document.querySelector("#city");
var fiveDayForecast = document.querySelector(".five-day-forecast");

getGeoCoordinates("Halifax");

// here is the function for gathering weather data
function weatherAPI(lat, lon) {
  let ApiUrl =
    "api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    weatherApiKey;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Process the weather data here
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// here is the function to find the lat and lon of the desired location
function getGeoCoordinates(city) {
  let GeoUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=" +
    weatherApiKey;
  let fetchData = getApi(GeoUrl);
  console.log(fetchData);
}

//here is the function request to get the data from API url's
function getApi(requestedUrl) {
  // inserting data in an array
  let returnData = [];

  fetch(requestedUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (i = 0; i < data.length; i++) {
        returnData.push(data[i]);
      }

      return returnData;
    });
}
