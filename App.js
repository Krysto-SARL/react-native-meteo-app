import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { s } from './App.style'
import Home from './pages/Home/Home'
import { ImageBackground } from 'react-native'
import BackgroundImg from './assets/background.png'
import AlataRegular from './assets/fonts/Alata-Regular.ttf'
import { useFonts } from 'expo-font'

export default function App() {
  const [isFontLoaded] = useFonts({
    'Alata-regular': AlataRegular,
  })

  if (isFontLoaded) {
    return (
      <ImageBackground
        source={BackgroundImg}
        style={s.img_background}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.appContainer}>
            {isFontLoaded ? <Home /> : null}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    )
  }
}
