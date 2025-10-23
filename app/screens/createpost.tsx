import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';

const CreatePost = () => {
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
        <View>
          <View style={{styles.header}}>
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
                <Text style={{color: "#FFF"}}>
                  Post
                </Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 20,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  header: {
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 20,
    backgroundColor: "#000",
    borderRadius: 20,
    height: 50,
    width: 350,
    justifyContent: 'center',
    alignItems:'center',
  },
});