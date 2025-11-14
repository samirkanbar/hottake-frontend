import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react'
import SignIn from './screens/(auth)/signIn';
import CreateAccount from './screens/(auth)/CreateAccount';

const index = () => {
    return <CreateAccount />
}

export default index