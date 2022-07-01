class UI{
  constructor(){
    this.location = document.querySelector(".w-location")
    this.humidity = document.querySelector("#w-humidity")
    this.wind = document.querySelector("#w-wind")
    this.feels = document.querySelector("#w-feels-like")
    this.clouds = document.querySelector("#w-clouds")
    this.coord = document.querySelector("#w-coord")
    this.temperature = document.querySelector("#w-temp")
    this.pressure = document.querySelector("#w-pressure")
    this.humidity = document.querySelector("#w-humidity")
    this.desc = document.querySelector("#w-desc")
    this.icon = document.querySelector("#w-icon")
  }

paint(weather){
  this.location.textContent = `${weather.name }, ${weather.sys.country}` 
  this.desc.textContent = `${weather.weather[0].main}: ${weather.weather[0].description} `
  this.coord.textContent = `Lon: ${weather.coord.lon}, Lat: ${weather.coord.lat}` 
  this.temperature.textContent =  `Temperature: ${weather.main.temp}` 
  this.humidity.textContent =  `Relative Humidity: ${weather.main.humidity}`
  this.pressure.textContent = `Pressure: ${weather.main.pressure}`  
  this.wind.textContent = `Wind: ${weather.wind.speed}`
  this.feels.textContent = `Feels like: ${weather.main.feels_like}`
}
}