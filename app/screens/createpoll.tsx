import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const CreatePoll = () => {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    Fraunces_700Bold,
    Fraunces_400Regular
  });
  
  const [pollTitle, setPollTitle] = useState('');
  const [choices, setChoices] = useState(['', '']);
  const [tags, onChangeTags] = useState('');

  const handleGoBack = () => { // Replace this with actual navigation or modal closing logic
    console.log('Navigating back/closing screen...'); 
  };

  const handlePostPoll = () => {
    // same thing with actual logic later
    const finalChoices = choices.filter(choice => choice.trim() !== '');
    console.log('Poll Title:', pollTitle);
    console.log('Choices:', finalChoices);
    console.log('Tags:', tags);
    alert('Poll Posted! (Check console for data)');
  };

  const addChoice = () => {
    if (choices.length < 4) {
      setChoices([...choices, '']);
    }
  };

  const updateChoice = (text: string, index: number) => {
    const newChoices = [...choices];
    newChoices[index] = text;
    setChoices(newChoices);
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

          <View style={styles.headerContainer}>
            <View style={styles.headerInner}>
                  <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
                        <Ionicons name="close" size={28} color="#000" /> 
                    </TouchableOpacity>
                  </View>
                  <View style={styles.headerContainer}>
                    <Text style={styles.title}>Create a Poll</Text>       
                  </View>  
                  <View style={styles.headerContainer} />  
              </View>
          </View>

          <Text style={styles.firstSubtitle}>Title Your Poll:</Text>
          <TextInput
            style={styles.input_small}
            onChangeText={setPollTitle}
            value={pollTitle}
            placeholder="e.g., Cats or Dogs?"
          />

          <Text style={styles.subtitle}>Poll Choices (up to 4):</Text>
          {choices.map((choice, index) => (
            <TextInput
              key={index}
              style={styles.input_small}
              onChangeText={(text) => updateChoice(text, index)}
              value={choice}
              placeholder={`Choice ${index + 1}`}
            />
          ))}

          {choices.length < 4 && (
            <TouchableOpacity onPress={addChoice} style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Add Option</Text>
            </TouchableOpacity>
          )}

          <Text style={styles.subtitle}>Tags (optional):</Text>
          <TextInput
            style={styles.input_small}
            onChangeText={onChangeTags}
            value={tags}
            placeholder="Add tags"
          />

          <View style={{alignItems: 'center', marginVertical: 20}}>
            <TouchableOpacity onPress={handlePostPoll}>
                <View style={styles.button}>
                  <Text style={{color: "#FFF"}}>Post Poll</Text>
                </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CreatePoll;


const styles = StyleSheet.create({
  // ---  Containers ---
  container: {
    flex: 1,
    paddingTop: 0,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  headerContainer: {
    flex: 1,
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingBottom: 50, 
  },

  // --- Title & Text ---
  title: {
    fontSize: 38,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
    marginTop: 0,
    marginBottom: 0, 
  },
  closeButton: {
    // position: 'absolute', 
    // padding: 5, 
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

  // --- Inputs  ---
  input_small: {
    marginTop: 10,
    marginBottom: 30, 
    width: '100%', 
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#FFF',
    fontFamily: 'RobotoCondensed_400Regular',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  
  addButton: {
    backgroundColor: '#ffffffaa', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#000',
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 16,
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
});