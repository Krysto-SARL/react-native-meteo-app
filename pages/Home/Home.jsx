import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { s } from './Home.style'
import { View } from 'react-native'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location'
import { meteoAPI } from '../../api/meteo'
import Txt from '../../components/Txt/Txt'
import MeteoBasic from '../../components/MeteoBasic/MeteoBasic'
import { getWeatherInterpretation } from '../../services/meteo-services'
import MeteoAdvanced from '../../components/MeteoAdvanced/MeteoAdvanced'
import {useNavigation} from "@react-navigation/native"



export default function Home() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const nav = useNavigation()
  const currentWeather = weather?.current_weather

  useEffect(() => {
    getUserCoords()
  }, [])

  useEffect(() => {
    if (coords) {
      fetchWeather(coords)
      fetchCity(coords)
    }
  }, [coords])

  async function getUserCoords() {
    let { status } = await requestForegroundPermissionsAsync()
    if (status === 'granted') {
      const location = await getCurrentPositionAsync()

      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    } else {
      setCoords({ lat: '-22.27', lng: '166.45' })
    }
  }

  async function fetchWeather(coordinates) {
    const weatherResponse = await meteoAPI.fetchWeatherFromCoords(coordinates)
    setWeather(weatherResponse)
  }

  async function fetchCity(coordinates) {
    const cityResponse = await meteoAPI.fetchCityFromCoords(coordinates)
    setCity(cityResponse)
  }

  function goToForecastPage(){
    nav.navigate("Forecast", {city, ...weather.daily})
  }

  return currentWeather ? (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
          city={city}
          temperature={Math.round(currentWeather?.temperature)}
          onPress={goToForecastPage}
        />
      </View>
      <View style={s.searchBar_container}>
        <Txt>SearchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
       <MeteoAdvanced wind={currentWeather.windspeed} dusk={weather.daily.sunrise[0].split("T")[1]} dawn={weather.daily.sunset[0].split("T")[1]}/>
      </View>
    </>
  ) : null
}
