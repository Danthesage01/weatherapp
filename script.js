const storage = new Storage()

const weatherLocation = storage.getLocationData()

const weather = new Weather(weatherLocation.city)

const ui = new UI()


document.addEventListener("DOMContentLoaded", getWeather)

document.querySelector("#w-change-btn").addEventListener("click", (e) => {

  const city = document.querySelector("#city").value

  weather.changeLocation(city)

  storage.setLocationData(weatherLocation.city)
 
  document.querySelector("#city").value = ""
  getWeather()

  // Close Modal
  $("#locModal").modal("hide")

  e.preventDefault()
})

function getWeather() {
  weather.getWeather()
    .then(res => {
      ui.paint(res)
    })

    .catch(err => console.log(err))
}

