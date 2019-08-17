import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('./../images/shopping-cart.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>M Shopping Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between'
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15
  }
})

export default Header
