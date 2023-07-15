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

export default function Home() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    getUserCoords()
  }, [])

  useEffect(() => {
    if (coords) {
      fetchWeather(coords)
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

  console.log(weather)

  return (
    <>
      <View style={s.meteo_basic}>
       <MeteoBasic/>
      </View>
      <View style={s.searchBar_container}>
        <Txt>SearchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>meteo advanced</Txt>
      </View>
    </>
  )
}
