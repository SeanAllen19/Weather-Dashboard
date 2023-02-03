var APIKey = 'f193647a2e1252e545175ee39dc45a80';
var searchBtn = document.getElementById('search-btn');
var temp = document.getElementById('temp')
var wind = document.getElementById('wind')
var humidity = document.getElementById('humidity')
var uvIndex = document.getElementById('uv-index')
var skies = document.getElementById('skies')

searchBtn.addEventListener('click', setup);

function setup() {
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
}
function gotData(data) {
    info = data;
    console.log(info.coord.lon);
    console.log(info.coord.lat)
    display()
}
function display() {
    temp.innerText = "Curent Temperature: " + info.main.temp
    wind.innerText = "Wind-Speed: " + info.wind.speed
    humidity.innerText = "Humidity: " + info.main.humidity
    skies.innerText = "Skies: " + info.weather[0].description
}