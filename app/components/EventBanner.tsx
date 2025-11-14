import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type EventBannerProps = {
    event_name: string;
}

const EventBanner: React.FC<EventBannerProps> = ({ event_name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event_name}</Text>
    </View>
  )
}

export default EventBanner

const styles = StyleSheet.create({
    container: {
      width: 350,
      height: 100,
      backgroundColor: "#Da291c",
      borderRadius: 20,
      justifyContent: 'center',
      alignContent: 'center'
    },

    title: {
      fontFamily: 'RobotoCondensed_400Regular',
      fontSize: 38,
      color: '#000',
      textAlign: 'center'
    }
})