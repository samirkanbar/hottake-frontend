import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EventBanner = () => {
  return (
    <View style={styles.bannerContainer} />
  )
}

export default EventBanner

const styles = StyleSheet.create({
    bannerContainer: {
      width: 350,
      height: 100,
      backgroundColor: "#ffff",
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },


})