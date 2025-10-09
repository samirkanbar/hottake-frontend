import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
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
});