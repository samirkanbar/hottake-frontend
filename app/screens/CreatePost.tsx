import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react'

const CreatePost = () => {

  const [title, onChangeTitle] = useState(String)
  const [content, onChangeContent] = useState(String)
  const [tags, onChangeTags] = useState(String)
    
    return (
      <SafeAreaView style={styles.container}>
          <Text>Title</Text>
          <TextInput
              style = {styles.input}
              onChangeText = {onChangeTitle}
              value = {title}
              placeholder = ""
          />
          <Text>Content</Text>
          <TextInput
              style = {styles.input}
              onChangeText = {onChangeContent}
              value = {content}
              placeholder = ""
          />
          <Text>Tags(optional)</Text>
          <TextInput
              style = {styles.input}
              onChangeText = {onChangeTags}
              value = {tags}
              placeholder = ""
          />
          <TouchableOpacity>
              <View style={styles.button}>
                  <Text>Post</Text>
              </View>
          </TouchableOpacity>

      </SafeAreaView>
    )
}

export default CreatePost;

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
    });