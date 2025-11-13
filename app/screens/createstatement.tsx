import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const CreateStatement = () => {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    Fraunces_700Bold,
    Fraunces_400Regular
  });

    const [Title, onChangeTitle] = React.useState('');
    const [content, onChangeContent] = React.useState('');
    const [tags, onChangeTags] = React.useState('');
  
    const handleGoBack = () => {
  // Replace this with actual navigation or modal closing logic
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
      <View style={styles.contentWrapper}>

      <View style={styles.headerContainer}>
        <View style={styles.headerInner}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
                    <Ionicons name="close" size={28} color="#000" /> 
                </TouchableOpacity>
              </View>
              <View style={styles.headerContainer}>
                <Text style={styles.title}>Create A Statement</Text>
              </View>
              <View style={styles.headerContainer} />
          </View>
    </View>


        <View>
            <Text style={styles.firstSubtitle}>Title Your Take:</Text>
            <TextInput
              style={styles.input_small}
              onChangeText={onChangeTitle}
              value={Title}
              placeholder="Title"
            />

            <Text style={styles.subtitle}>Content:</Text>
            <TextInput
              style={styles.input_large}
              onChangeText={onChangeContent}
              value={content}
              placeholder="Explain your take..."
              multiline={true}
              textAlignVertical='top'
            />

            <Text style={styles.subtitle}>Tags (optional):</Text>
            <TextInput
              style={styles.input_small}
              onChangeText={onChangeTags}
              value={tags}
              placeholder="Add tags"
            />

          </View>
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => {console.log('button pressed!')}}>
                  <View style={styles.button}>
                    <Text style={{color: "#FFF"}}>Post</Text>
                  </View>
              </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default CreateStatement;

const styles = StyleSheet.create({

  // --- Containers ---
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
    //justifyContent: 'center',
  },

  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingBottom: 50,
  },

  // --- Title & Text ---
  title: {
    fontSize: 30,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
    marginTop: 0,
    marginBottom: 0, 
  },

  closeButton: { },

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

  // --- Inputs ---
  input_small: {
    marginTop: 10,
    marginBottom: 30,
    height: 50,
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
  input_large: {
    marginTop: 10,
    marginBottom: 30,
    height: 100,
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