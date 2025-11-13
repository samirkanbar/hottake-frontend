import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type EventBannerProps = {
    username: string;
}

const EventBanner: React.FC<EventBannerProps> = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text>Hello {username}!</Text>
    </View>
  )
}

export default EventBanner

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 200,
        backgroundColor: "#Da291c",
        borderRadius: 20,
        justifyContent: 'center',
        alignContent: 'center'
    }
})