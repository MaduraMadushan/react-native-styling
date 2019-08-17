import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  KeyboardAvoidingView
} from 'react-native'
import MyForm from './MyForm'

const Login = () => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./instagram-logo.png')} />
        <Text style={styles.title}>A simple login App</Text>
      </View>
      <View style={styles.myform}>
        <MyForm />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64ddbb',
    width: Dimensions.get('window').width
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  myform: {
    flex: 2
  },
  title: {
    color: '#fff',
    marginTop: 10
  }
})

export default Login
