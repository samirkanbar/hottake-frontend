import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import PostCard from '../components/PostCard';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';

const HomePage = () => {
    const [fontsLoaded] = useFonts({
        Fraunces_700Bold,
        Fraunces_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

        return (
            <LinearGradient
                colors={['#ffe989', '#ff9350', '#ff3131']}
                style={{flex: 1}}>
                <SafeAreaView style={styles.container}>
                    <Text style = {styles.header}>Welcome to Hot Take</Text>

                    <View style={{ height: 10 }} /> 
                    <Text style={styles.title}>Today's Featured Takes</Text>
                    
                    <View>
                    {samplePosts.map((post) => (
                        <PostCard
                        key={post.id}
                        username={post.username}
                        created_at={post.created_at}
                        title={post.title}
                        content={post.content}
                        />
                    ))}
                    </View>
                
                    
                </SafeAreaView>
            </LinearGradient>

        )
}

export default HomePage;

const styles = StyleSheet.create({
        container: {
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 10
        },
        title: {
            fontSize: 20,
            fontFamily: 'Fraunces_400Regular',
            fontWeight: 'normal',
        },
        header: {
            fontSize: 33,
            fontFamily: 'Fraunces_700Bold',
            fontWeight: 'normal',
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
            fontFamily: 'Fraunces_400Regular',
        },
        cardLabel: {
            marginTop: 6,
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
        },
    });

const samplePosts = [
  {
    id: "1",
    username: "armani",
    created_at: "2h ago",
    title: "Strozier sucks!!!",
    content: "Strozier is the worst place to study",
  },
  {
    id: "2",
    username: "daniel",
    created_at: "3h ago",
    title: "Hot Take is a poorly made app",
    content: "twitter and reddit are way better"
  },
  {
    id: "3",
    username: "jane_doe",
    created_at: "3h ago",
    title: "C++ is the best programming language",
    content: "idc how good Python is",
  },
];