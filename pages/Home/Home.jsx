import React from 'react'
import { Text } from 'react-native'
import { s } from './Home.style'
import { View } from 'react-native'

export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text>Home</Text>
      </View>
      <View style={s.searchBar_container}>
        <Text>SearchBar</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text>meteo advanced</Text>
      </View>
    </>
  )
}
