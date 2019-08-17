import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from './Header'
import HeroImage from './HeroImage'
import Body from './Body'

const ShoppingCart = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <HeroImage />
        <Body />
      </ScrollView>
    </View>
  )
}

export default ShoppingCart
