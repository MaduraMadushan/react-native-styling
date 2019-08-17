import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

const Header = () => {
  return (
    <ImageBackground
      style={styles.headerbg}
      source={require('./images/mg2.jpg')}
    >
      <View style={styles.headercontainer}>
        <View style={styles.profilepiccontainer}>
          <Image style={styles.mypic} source={require('./images/pro.jpg')} />
        </View>
        <Text style={styles.name}>Senali Fonseka</Text>
        <Text style={styles.liner}>A part time photographer</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  profilepiccontainer: {
    width: 180,
    height: 180
  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#fff'
  },
  name: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  liner: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic'
  }
})

export default Header
