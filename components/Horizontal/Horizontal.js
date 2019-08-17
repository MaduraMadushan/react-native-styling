import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

const Horizontal = () => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      <View style={styles.outer}>
        <Text style={styles.innerText}>Welcome to Madura App</Text>
      </View>
      <View style={[styles.outer, styles.red]}>
        <Text style={styles.innerText}>Best quality vidoes</Text>
      </View>
      <View style={[styles.outer, styles.green]}>
        <Text style={styles.innerText}>available on ios and android</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  innerText: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold'
  },
  red: {
    backgroundColor: '#dd4b39'
  },
  green: {
    backgroundColor: '#27ae60'
  }
})

export default Horizontal
