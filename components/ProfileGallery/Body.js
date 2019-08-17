import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'

const Body = () => {
  return (
    <ScrollView>
      <View style={styles.bigview}>
        <View style={styles.smallview}>
          <Image style={styles.myimage} source={require('./images/mg1.jpg')} />
        </View>
        <View style={styles.smallview}>
          <Image style={styles.myimage} source={require('./images/mg2.jpg')} />
        </View>
        <View style={styles.smallview}>
          <Image style={styles.myimage} source={require('./images/mg3.jpg')} />
        </View>
        <View style={styles.smallview}>
          <Image style={styles.myimage} source={require('./images/mg4.jpg')} />
        </View>
        <View style={styles.smallview}>
          <Image style={styles.myimage} source={require('./images/mg5.jpg')} />
        </View>
        <View style={styles.smallview}>
          <Image style={styles.myimage} source={require('./images/mg6.jpg')} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bigview: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  smallview: {
    margin: 2,
    height: 100,
    width: Dimensions.get('window').width / 2 - 4
  },
  myimage: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  }
})

export default Body
