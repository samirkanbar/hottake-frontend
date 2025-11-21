import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
//rsvp button component

type RSVPButtonProps = TouchableOpacityProps& {

};


const RSVPButton: React.FC<RSVPButtonProps> = ({onPress}) => {

    const handlePress = () => {
        
        console.log('Button was tapped!');
    };
    
  return (
    <TouchableOpacity 
        onPress = {onPress}
        activeOpacity={0.2}
    >
        <LinearGradient
            colors={['#38B6FF', '#0056B3']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
            style={styles.button}>
        <Text style={styles.text}>RSVP</Text>
        </LinearGradient>
        
        
    </TouchableOpacity>
  )
}

export default RSVPButton

const styles = StyleSheet.create({
    button: {
        width: 125,
        height: 75,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'RobotoCondensed_400Regular',
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        margin: 10
    }
})