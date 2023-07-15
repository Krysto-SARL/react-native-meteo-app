import { SafeAreaProvider } from 'react-native-safe-area-context'
import { s } from './App.style'
import Home from './pages/Home/Home'
import { ImageBackground, SafeAreaView } from 'react-native'
import BackgroundImg from './assets/background.png'

export default function App() {
  return (
    <ImageBackground
      source={BackgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.appContainer}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  )
}
