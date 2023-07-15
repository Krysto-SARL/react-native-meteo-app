import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { s } from './Txt.style'

export default function Txt({ children, style }) {
  const { height } = useWindowDimensions()
  const fontSize = style?.fontSize || s.text.fontSize


  return (
    <Text style={[s.text, style, { fontSize: fontSize * 0.00121 * height }]}>
      {children}
    </Text>
  )
}
