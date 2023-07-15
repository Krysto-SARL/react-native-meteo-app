
import { View } from 'react-native'
import { StyledLabel, StyledValue, StyledView, s } from './MeteoAdvanced.style'
import Txt from '../Txt/Txt'


export default function MeteoAdvanced({dusk , dawn , wind}) {
  return (
    <View style={s.container}>
        <StyledView>
      <StyledValue style={{ fontSize: 20}}>{dusk}</StyledValue>
      <StyledLabel style={{ fontSize: 15}}>Aube</StyledLabel>
      </StyledView>
        <StyledView >
      <StyledValue style={{ fontSize: 20}}>{dawn}</StyledValue>
      <StyledLabel style={{ fontSize: 15}}>Aube</StyledLabel>
      </StyledView>
      <StyledView>
      <StyledValue style={{ fontSize: 20}}>{wind} Km/h</StyledValue>
      <StyledLabel style={{ fontSize: 15}}>Vent</StyledLabel>
      </StyledView>

    </View>
  )
}
