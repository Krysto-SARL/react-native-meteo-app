import { StyleSheet, View } from 'react-native'
import Txt from '../Txt/Txt'

const s = StyleSheet.create({
  container: {
    borderColor: 'white',
    backgroundColor: '#00000043',
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})
export { s }

export function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>
}
export function StyledValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>
}
export function StyledView({ children }) {
  return <View style={{ alignItems: 'center' }}>{children}</View>
}
