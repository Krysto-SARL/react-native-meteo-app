import { SafeAreaProvider } from 'react-native-safe-area-context'
import { s } from './App.style'
import Home from './pages/Home/Home'
import { SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
