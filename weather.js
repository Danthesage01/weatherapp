class Weather {
  constructor(city, country) {
    this.apikey = "3166003b51cd9200af68e88becf434c0"
    this.city = city
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`
    http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apikey}`)

    const responseData = await response.json()

    return responseData
      
  }

  // Change weather location
  changeLocation(city){
    this.city = city
  }
}

