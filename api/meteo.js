import axios from 'axios'

export class meteoAPI {
  static async fetchWeatherFromCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`,
      )
    ).data
  }
}
export class krystoAPI {
  static async fetchKrystoAPI() {
    return (
      await axios.get(
        `http://175.158.174.65:8080/api/v1/customers/639a3664e5fc335f796a4920`,
      )
    ).data
  }
}
