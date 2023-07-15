import { s } from './Forecast.style'

import Txt from '../../components/Txt/Txt'
import { useRoute } from '@react-navigation/native'

export default function Forecast() {

   const {params} =  useRoute()

   console.log(params);
  return (
    <>
      <Txt>Forecast</Txt>
    </>
  )
}
