import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CardView from '../components/CardView';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';

const HomePage = () => {
    const [fontsLoaded] = useFonts({
        Fraunces_700Bold,
        Fraunces_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

        return (
            <LinearGradient
                colors={['#ffe989', '#ff9350', '#ff3131']}
                style={{flex: 1}}>
                <SafeAreaView style={styles.container}>
                    <Text style = {styles.header}>Welcome to Hot Take</Text>

                    <View style={{ height: 10 }} /> 
                    <Text style={styles.title}>Featured Hot Take</Text>
                    
                    /* Show a featured post */

                    <View style={{ height: 10 }} /> 
                    <Text style = {styles.title}>Featured Poll</Text>

                    /* Show a featured poll */

                    <View style={{ height: 10 }} /> 
                    <Text style = {styles.title}>Featured Event</Text>
                
                    
                </SafeAreaView>
            </LinearGradient>

        )
}

export default HomePage;

const styles = StyleSheet.create({
        container: {
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 10
        },
        title: {
            fontSize: 20,
            fontFamily: 'Fraunces_400Regular',
            fontWeight: 'normal',
        },
        header: {
            fontSize: 33,
            fontFamily: 'Fraunces_700Bold',
            fontWeight: 'normal',
        },
        input: {
            height: 50,
            width: 350,
            borderWidth: 1,
            borderRadius: 20,
            padding: 5
        },
        button: {
            backgroundColor: "#000",
            borderRadius: 20,
            height: 50,
            width: 350,
            justifyContent: 'center',
            alignItems:'center'
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'Fraunces_400Regular',
        },
        cardLabel: {
            marginTop: 6,
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
        },
    });