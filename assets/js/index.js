var APIKey = 'f70f9a3b061e9d0c6c64a09bf5d796d8';
var city
var searchBtn = document.getElementById('search-btn');
var queryURL
var temp = document.getElementById('temp')
var wind = document.getElementById('wind')
var humidity = document.getElementById('humidity')
var uvIndex = document.getElementById('uv-index')
var skies = document.getElementById('skies')

searchBtn.addEventListener('click', setup);

function setup(e) {
    city = document.querySelector('#city-input-text').value
    console.log(city)
    queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey + '&units=imperial';
    console.log(queryURL)
    weather()
}

function weather() {
    fetch(queryURL)
        .then(response => response.json())
        .then(data => gotData(data))
    // document.createElement()
}

function retrived(data) {
    uv = data
    console.log(data)
}
function gotData(data) {
    info = data;
    console.log(info);
    display()
}
function display() {
    temp.innerText = "Curent Temperature: " + info.main.temp
    wind.innerText = "Wind-Speed: " + info.wind.speed
    humidity.innerText = "Humidity: " + info.main.humidity
    skies.innerText = "Skies: " + info.weather[0].description
}