import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Button } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import createpost from './screens/createpost';
import CreatePost from './screens/createpost';
import HomePage from './screens/homepage';

const index = () => {
  return <HomePage />
}

export default index