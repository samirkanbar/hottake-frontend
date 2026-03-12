import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';

const Create = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
      RobotoCondensed_400Regular,
      RobotoCondensed_700Bold,
      Fraunces_700Bold,
      Fraunces_400Regular
    });

  const handleGoBack = () => {
    // Add your back navigation logic here
  }

   if (!fontsLoaded) {
    return null;
  }

  return (
       <LinearGradient
            colors={['#ffe989', '#ff9350', '#ff3131']}
            style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
              {/* back button and title */}
               <View style={styles.contentWrapper}>
                         <View style={styles.headerInner}>
                           <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
                             <Ionicons name="close" size={28} color="#000" /> 
                           </TouchableOpacity>
               
                           <View style={styles.HeaderTitleWrapper}>
                             <Text style={styles.title}>Create Something</Text>
                           </View>
                  </View>
                  {/* button for create question */}
                    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                              <TouchableOpacity onPress={() => router.push('../screens/createquestion')}>
                                <View style={styles.button}>
                                  <Text style={{color: "#FFF", fontFamily: 'RobotoCondensed_700Bold', fontSize: 25}}>Create Question</Text>
                                </View>
                              </TouchableOpacity>
                            </View>

                  {/* button for create poll */}
                    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                              <TouchableOpacity onPress={() => router.push('../screens/createpoll')}>
                                <View style={styles.button}>
                                  <Text style={{color: "#FFF", fontFamily: 'RobotoCondensed_700Bold', fontSize: 25}}>Create Poll</Text>
                                </View>
                              </TouchableOpacity>
                            </View>

                    {/* button for create statement */}
                    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                              <TouchableOpacity onPress={() => router.push('../screens/createstatement')}>
                                <View style={styles.button}>
                                  <Text style={{color: "#FFF", fontFamily: 'RobotoCondensed_700Bold', fontSize: 25}}>Create Statement</Text>
                                </View>
                              </TouchableOpacity>
                            </View>

                </View>
              </SafeAreaView>
          </LinearGradient>
    )
  }

export default Create

const styles = StyleSheet.create({
  // Containers 
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
   button: {
    marginTop: 20,
    backgroundColor: "#000000ff",
    borderRadius: 20,
    height: 80,
    width: 300,
    padding: 20,
    justifyContent: 'center',
    alignItems:'center',
  },

  // Title + Text
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
})
