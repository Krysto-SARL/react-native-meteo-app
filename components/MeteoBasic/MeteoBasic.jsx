import { Image, Text } from 'react-native'
import { s } from './MeteoBasic.style'
import { View } from 'react-native'
import Txt from '../Txt/Txt'

export default function MeteoBasic({}) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <Txt>City</Txt>
      <Txt style={s.weather}>Label</Txt>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>3°</Txt>
        <Image style={s.image}/>
      </View>
    </>
  )
}
