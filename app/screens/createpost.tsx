import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const CreatePost = () => {
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
      <View>
         <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Create a Statement</Text>
          </View>
            <Text style={styles.subtitle}>Title Your Take:</Text>
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
              placeholder="What's your take?"
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

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 20,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },

  closeButton: {
  },
  header: {
    //backgroundColor: '#000',
    height: 60,
    marginBottom: 30,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  title: {
    fontSize: 38,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
  },

  subtitle: { 
    fontSize: 20,
    fontFamily: 'Fraunces_400Regular',
  },
  input_small: {

    marginTop: 10,
    marginBottom: 30,
    height: 50,
    width: 375,
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
    width: 375,
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