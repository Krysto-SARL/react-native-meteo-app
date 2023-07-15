import { StyleSheet } from 'react-native'

const s = StyleSheet.create({
  clock: {
    alignItems: 'flex-end',
  },
  weather: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '-90deg' }],
  },
  image: {
    height: 90,
    width: 90,
    backgroundColor: 'white',
  },
  temperature_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  temperature: {
    fontSize: 150,
  },
})
export { s }
