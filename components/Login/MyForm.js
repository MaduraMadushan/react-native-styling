import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

const MyForm = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Username' style={styles.input} />
      <TextInput placeholder='Password' style={styles.input} />
      <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingLeft: 10,
    marginBottom: 15
  },
  buttoncontainer: {
    backgroundColor: '#27ae60',
    paddingVertical: 15
  },
  buttontext: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default MyForm
