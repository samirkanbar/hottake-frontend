import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const SignIn = () => {

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    return (
         <LinearGradient
                    colors={['#ffe989', '#ff9350', '#ff3131']} 
                    style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Sign in</Text>


<Text style={styles.text}>Enter email/username:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholder="Your Password"
                    placeholderTextColor="#888"
                />

<Text style={styles.text}>Enter password:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Your Password"
                    placeholderTextColor="#888"
                />


                <View style={styles.dividerRow}>
                    <View style={styles.divider} />
                    <Text>or</Text>
                    <View style={styles.divider} />
                </View>

                <View style={[styles.authButton, { opacity: 1 }]}>
                <Ionicons name="logo-google" size={25} style={{ marginRight: 8 }} />
                  <Text style={{ color: '#000000ff', fontSize: 16, fontWeight: '400' }}>
Continue with Google</Text>
                </View>

                <View style={[styles.authButton, { opacity: 1 }]}>
                <Ionicons name="logo-apple" size={25} style={{ marginRight: 8 }} />
                  <Text style={{ color: '#000000ff', fontSize: 16, fontWeight: '400' }}>
Continue with Apple</Text>
                </View>





                <Text style={styles.termsText}>
                    By clicking continue, you agree to our{' '}
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.fsu.edu/')}>
                        Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.fsu.edu/')}>
                        Privacy Policy
                    </Text>
                </Text>



                </SafeAreaView> 
        </LinearGradient>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
        authButton: {
        flexDirection: 'row',       
        alignItems: 'center',
        backgroundColor: "#a8a0a0ff",
        borderRadius: 20,
        height: 50,
        width: 350,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        width: 350,              
        marginLeft: 10,          
        fontWeight: 'bold',
        fontSize: 15,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: 350,
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: "#000",
        borderRadius: 20,
        height: 50,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dividerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    divider: {
        height: 1,
        width: 175,
        backgroundColor: '#D9D9D9',
    },
    termsText: {
        textAlign: 'center',
        width: 350,
        color: '#000',
    },
    linkText: {
        color: 'white',
        textDecorationLine: 'underline',
    },

    RectangleButton: {
        flexDirection: 'row',       
        alignItems: 'center',
        backgroundColor: "#a8a0a0ff",
        borderRadius: 20,
        height: 50,
        width: 350,
        justifyContent: 'center',
    },
    authText: {
        fontSize: 16,
        color: '#000',
    },
    icon: {
        width: 24,
        height: 30,
        marginRight: 10,
    },
});