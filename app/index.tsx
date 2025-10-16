import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react'
import CreatePost from './screens/CreatePost';

const index = () => {
    return <CreatePost />
}

export default index;