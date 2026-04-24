import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type EventTitleProps = {
    event_name: string;
}


const EventTitle: React.FC<EventTitleProps> = ({ event_name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event_name}</Text>
    </View>
  )
}

export default EventTitle

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 75,
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 10,
    justifyContent: 'center'
  },
    title: {
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 38,
    color: '#000',
    textAlign: 'center',
  }
});