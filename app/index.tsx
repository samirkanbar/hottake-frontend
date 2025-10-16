
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';

const createpost = () => {
  const [fontsLoaded] = useFonts({
    Fraunces_700Bold,
    Fraunces_400Regular
  });
    const [Title, onChangeTitle] = React.useState(String);
    const [content, onChangeContent] = React.useState(String);
    const [tags, onChangeTags] = React.useState(String);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>

        <Text style={styles.title}>Create a Post</Text>

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

        <TouchableOpacity onPress={() => {console.log('button pressed!')}}>
            <View style={styles.button}>
              <Text style={{color: "#FFF"}}>
                Post
              </Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 20,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Fraunces_700Bold',
  },

  subtitle: {
    fontSize: 20,
    fontFamily: 'Fraunces_400Regular',
  },
  input_small: {
    height: 50,
    width: 375,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  input_large: {
    height: 100,
    width: 375,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 20,
    height: 50,
    width: 350,
    justifyContent: 'center',
    alignItems:'center',
  },
});


export default createpost;
/*import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Button } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react'

const index = () => {

    const [email, onChangeEmail] = useState(String)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <Text>Enter email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />
            <TouchableOpacity onPress={() => {console.log('button pressed!')}}>
                <View style={styles.button}>
                    <Text style={{color: "#FFF"}}>
                        Continue
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                <View style={{height: 1, width: 175, backgroundColor: '#D9D9D9'}} />
                <Text>or</Text>
                <View style={{height: 1, width: 175, backgroundColor: '#D9D9D9'}} />
            </View>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
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
    }
});*/