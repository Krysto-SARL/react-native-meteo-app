import { Image, Text } from 'react-native'
import { s } from './MeteoBasic.style'
import { View } from 'react-native'
import Txt from '../Txt/Txt'

export default function MeteoBasic({temperature, city , interpretation}) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <Txt>{city}</Txt>
      <Txt style={s.weather}>{interpretation.label}</Txt>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation.image}/>
      </View>
    </>
  )
}
