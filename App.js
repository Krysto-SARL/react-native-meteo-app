import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { s } from './App.style'
import Home from './pages/Home/Home'
import { ImageBackground } from 'react-native'
import BackgroundImg from './assets/background.png'
import AlataRegular from './assets/fonts/Alata-Regular.ttf'
import Forecast from './pages/Forecast/Forecast'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const navTheme = {
  colors: {
    background: 'transparent',
  },
}

export default function App() {
  const [isFontLoaded] = useFonts({
    'Alata-regular': AlataRegular,
  })

  return isFontLoaded ? (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={BackgroundImg}
        style={s.img_background}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.appContainer}>
            {
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Forecast" component={Forecast} />
              </Stack.Navigator>
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  ) : null
}
