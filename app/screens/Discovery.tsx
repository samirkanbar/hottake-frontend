// Armani's Discovery page

import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CardView from '../components/CardView';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';

const Discovery = () => {
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
                    <Text style = {styles.header}>Find a new take</Text>

                    <TextInput
                        style = {styles.input}
                        placeholder = "Search..."           
                    />
                    <View style={{ height: 10 }} /> 
                    <Text style={styles.title}>Trending Topics</Text>
                    <ScrollView contentContainerStyle={{gap: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ alignItems: 'center' }}>
                            <CardView image={require('../../assets/images/gameday.webp')} />
                            <Text style = {styles.cardLabel}>Gameday</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <CardView image={require('../../assets/images/local tally spots.webp')} />
                            <Text style = {styles.cardLabel}>Local Tally Spots</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <CardView image={require('../../assets/images/suwannee.webp')} />
                            <Text style = {styles.cardLabel}>Campus Food</Text>
                        </View>
                    </ScrollView>
                    <View style={{ height: 10 }} /> 

                    <Text style = {styles.title}>Upcoming Events</Text>
                    <ScrollView contentContainerStyle={{gap: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ alignItems: 'center' }}>
                            <CardView image={require('../../assets/images/seminole innovators.jpg')} />
                            <Text style = {styles.cardLabel}>Seminole Innovators Meeting</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <CardView image={require('../../assets/images/rocky horror.jpg')} />
                            <Text style = {styles.cardLabel}>Rocky Horror Picture Show @ ASLC</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <CardView image={require('../../assets/images/market wednesday.webp')} />
                            <Text style = {styles.cardLabel}>Market Wednesday</Text>
                        </View>
                    </ScrollView>
                    
                </SafeAreaView>
            </LinearGradient>

        )
}

export default Discovery;

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
            fontSize: 40,
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
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
        },
    });