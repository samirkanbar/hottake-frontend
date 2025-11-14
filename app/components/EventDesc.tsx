import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type EventDescProps = {
    event_desc: string;
}

const EventDesc: React.FC<EventDescProps> = ({event_desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{event_desc}</Text>
    </View>
  )
}

export default EventDesc

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 150,

        backgroundColor: '#ffff'
    },
    text: {
        fontFamily: 'RobotoCondensed_400Regular',
        fontSize: 18,
        color: '#000',
        textAlign: 'left'
    }
})