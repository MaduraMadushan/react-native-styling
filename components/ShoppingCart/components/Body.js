import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import CompoImage from './CompoImage'

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <CompoImage imageSource={require('./../images/asus.jpg')} />
      </View>
      <View style={styles.column2}>
        <CompoImage imageSource={require('./../images/msi.jpg')} />
      </View>
      <View style={styles.full}>
        <CompoImage imageSource={require('./../images/razer.jpg')} />
      </View>
      <View style={styles.column2}>
        <CompoImage imageSource={require('./../images/hp.jpg')} />
      </View>
      <View style={styles.column2}>
        <CompoImage imageSource={require('./../images/dell.jpg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#c1c1c1'
  },
  column1: {
    flex: 1,
    padding: 5
  },
  column2: {
    flex: 2,
    padding: 5
  },
  full: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
})

export default Body
