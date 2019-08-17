import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//import ShoppingCart from './components/ShoppingCart/components/ShoppingCart'
import ProfileGallery from './components/ProfileGallery/ProfileGallery'
//import Login from './components/Login/Login'
//import Horizontal from './components/Horizontal/Horizontal'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Horizontal /> */}
      {/* <Login /> */}
      {/* <ShoppingCart /> */}
      <ProfileGallery />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
