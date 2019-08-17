import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import HeroText from './HeroText'

const HeroImage = () => {
  return (
    <ImageBackground
      source={require('./../images/dell.jpg')}
      style={styles.hero}
    >
      <HeroText />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  hero: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HeroImage
