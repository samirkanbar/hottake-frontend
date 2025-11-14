import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import EventBanner from '../components/EventBanner'

const EventPage = () => {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    Fraunces_700Bold,
    Fraunces_400Regular
    });
    const [Title, onChangeTitle] = React.useState(String);
    const [content, onChangeContent] = React.useState(String);
    const [tags, onChangeTags] = React.useState(String);
  
    const handleGoBack = () => {
    // Replace this with actual navigation or modal closing logic
    console.log('Navigating back/closing screen...'); 
    };

    if (!fontsLoaded) {
    return null;
    }

  return (
    <LinearGradient
      colors={['#ffe8baff', '#ffdb77ff', '#ed3e3eff']}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <EventBanner event_name="Carter"/>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default EventPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
});