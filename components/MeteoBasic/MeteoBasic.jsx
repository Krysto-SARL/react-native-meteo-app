import { Image, Text, TouchableOpacity } from 'react-native'
import { s } from './MeteoBasic.style'
import { View } from 'react-native'
import Txt from '../Txt/Txt'
import Clock from '../Clock/Clock'

export default function MeteoBasic({temperature, city , interpretation, onPress}) {
  return (
    <>
      <View style={s.clock}>
       <Clock/>
      </View>
      <Txt>{city}</Txt>
      <Txt style={s.weather}>{interpretation.label}</Txt>
      <View style={s.temperature_box}>
        <TouchableOpacity onPress={onPress}>

        <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image}/>
      </View>
    </>
  )
}
