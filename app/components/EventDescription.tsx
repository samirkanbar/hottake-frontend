import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type EventDescriptionProps = {
    event_desc: string;
}

const EventDescription: React.FC<EventDescriptionProps> = ({event_desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{event_desc}</Text>
    </View>
  )
}

export default EventDescription

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 350,
        borderRadius: 20,
        backgroundColor: '#ffff',
        borderColor: '#000',
        borderWidth: 1.5,
    },
    text: {
        fontFamily: 'RobotoCondensed_400Regular',
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
        margin: 10
    }
})