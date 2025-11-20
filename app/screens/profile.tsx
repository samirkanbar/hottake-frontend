import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    Fraunces_700Bold,
    Fraunces_400Regular
  });
  

  const handleGoBack = () => { // Replace this with actual navigation or modal closing logic
    console.log('Navigating back/closing screen...'); 
  };

  if (!fontsLoaded) {
    return null;
  }

  return (

    <LinearGradient
      colors={['#ffe989', '#ff9350', '#ff3131']}
      style={{flex: 1}}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentWrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.headerInner}>
          <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
            <Ionicons name="close" size={28} color="#000" /> 
          </TouchableOpacity>
        
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.title}>Profile</Text>      
          </View>
          <View style={{flex: 1}} />
        </View>

        <View style={{ alignItems: "center", marginTop: 20}}>
          <View style={styles.ProfileView}>
            <Image source={{ uri: 'https://avatar.iran.liara.run/public/18' }} style={styles.profileImage} />
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20}}>
          <Text style={styles.title}>@Username</Text>
        </View>

        <View>  
        


        </View>

   </ScrollView>
   </SafeAreaView>
</LinearGradient>
    );
    }

export default Profile;

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    paddingTop: 0, 
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  headerTitleWrapper: {
    marginLeft: 15,
    flexShrink: 1, 
  },

  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingBottom: 50,
  },

  inputContainer: {
  },

  title: {
    fontSize: 30,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
    marginTop: 0,
    marginBottom: 0, 
  },

  closeButton: { 
    padding: 5,
  },

  subtitle: { 
    fontSize: 20,
    fontFamily: 'Fraunces_400Regular',
    marginTop: 30,
    marginBottom: 0,
  },
  
  firstSubtitle: {
    fontSize: 20,
    fontFamily: 'Fraunces_400Regular',
    marginTop: 5, 
    marginBottom: 0,
  },

  input_small: {
    marginTop: 10,
    marginBottom: 30,
    height: 50,
    width: '100%', 
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    fontFamily: 'RobotoCondensed_400Regular',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,

  },
  input_large: {
    marginTop: 10,
    marginBottom: 30,
    height: 100,
    width: '100%', 
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    fontFamily: 'RobotoCondensed_400Regular',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },


  button: {
    marginTop: 20,
    backgroundColor: "#000000ff",
    borderRadius: 20,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems:'center',
  },


  ProfileView: { 
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 3,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    resizeMode: 'cover',
  }
});
