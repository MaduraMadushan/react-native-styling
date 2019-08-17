import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HeroText = () => {
  return (
    <View>
      <Text style={styles.headerText}>M Laptops</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 0,

    alignSelf: 'center',
    fontSize: 25,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255, 0.7)',
    padding: 10,
    fontWeight: 'bold'
  }
})

export default HeroText
