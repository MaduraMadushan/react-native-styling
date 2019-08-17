import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const CompoImage = ({ imageSource }) => {
  return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CompoImage
