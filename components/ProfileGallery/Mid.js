import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Mid = () => {
  return (
    <View style={styles.mid}>
      <View style={[styles.outerview, styles.leftbar]}>
        <Text style={styles.textone}>75 +</Text>
        <Text style={styles.texttwo}>Images</Text>
      </View>
      <View style={styles.outerview}>
        <Text style={styles.textone}>100k +</Text>
        <Text style={styles.texttwo}>Subscribers</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mid: {
    flexDirection: 'row',
    backgroundColor: '#cf000f',
    borderTopWidth: 8,
    borderTopColor: '#fff'
  },
  outerview: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  textone: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  texttwo: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5
  },
  leftbar: {
    borderRightWidth: 4,
    borderRightColor: '#fff'
  }
})

export default Mid
