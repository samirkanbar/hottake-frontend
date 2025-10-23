// Armani's Discovery page

import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react'

const Discovery = () => {

//   const [title, onChangeTitle] = useState(String)
//   const [content, onChangeContent] = useState(String)
//   const [tags, onChangeTags] = useState(String)
    
//     return (
//       <SafeAreaView style={styles.container}>
//           <Text>Title </Text>
//           <TextInput
//               style = {styles.input}
//               onChangeText = {onChangeTitle}
//               value = {title}
//               placeholder = ""
//           />
//           <Text>Content</Text>
//           <TextInput
//               style = {styles.input}
//               onChangeText = {onChangeContent}
//               value = {content}
//               placeholder = ""
//           />
//           <Text>Tags(optional)</Text>
//           <TextInput
//               style = {styles.input}
//               onChangeText = {onChangeTags}
//               value = {tags}
//               placeholder = ""
//           />
//           <TouchableOpacity>
//               <View style={styles.button}>
//                   <Text>Post</Text>
//               </View>
//           </TouchableOpacity>

//       </SafeAreaView>
//     )
        return (
            <SafeAreaView style={styles.container}>
                <Text style = {styles.header}>Find a new take</Text>

                <TextInput
                    style = {styles.input}
                    placeholder = "Search..."           
                />
                
                <Text style = {styles.title}>Trending Topics</Text>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Gameday</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Local Tally Spots</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Campus Food</Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.title}>Upcoming Events</Text>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Seminole Innovators Meeting</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Rocky Horror Picture Show @ ASLC</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Market Wednesday</Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>

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
            fontSize: 15,
            fontWeight: 'bold'
        },
        header: {
            fontSize: 40,
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
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
        }
    });