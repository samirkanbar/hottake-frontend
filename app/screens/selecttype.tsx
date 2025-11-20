import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
//import { HeaderTitle } from '@react-navigation/elements';

const SelectType = () => {
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
          
            <View style={styles.HeaderTitleWrapper}>
              <Text style={styles.title}>Select Post Type</Text>      
            </View>
            <View style={{flex: 1}} />
          </View>

          <View style={styles.inputContainer}></View>

          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {console.log('button pressed!')}}>
              <View style={styles.button}>
                <Text style={{color: "#FFF", fontFamily: 'RobotoCondensed_700Bold', fontSize: 25}}>Ask A Question</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {console.log('button pressed!')}}>
              <View style={styles.button}>
                <Text style={{color: "#FFF", fontFamily: 'RobotoCondensed_700Bold', fontSize: 25}}>Create A Poll</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {console.log('button pressed!')}}>
              <View style={styles.button}>
                <Text style={{color: "#FFF", fontFamily: 'RobotoCondensed_700Bold', fontSize: 25}}>Make a Statement</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SelectType;


const styles = StyleSheet.create({
  // ---  Containers ---
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },

  inputContainer: {
  },

  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  HeaderTitleWrapper: {
    marginLeft: 15,
    flexShrink: 1,
  },

  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingBottom: 50, 
  },

  // Title & Text
  title: {
    fontSize: 38,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
    marginTop: 0,
    marginBottom: 0, 
  },

  closeButton: {
    padding: 5, 
  },
  
  button: {
    marginTop: 80,
    backgroundColor: "#000000ff",
    borderRadius: 20,
    height: 70,
    width: 250,
    justifyContent: 'center',
    alignItems:'center',
  },
});
