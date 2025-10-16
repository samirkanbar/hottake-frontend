import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Button } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import createpost from './screens/createpost';
import CreatePost from './screens/createpost';

const index = () => {
  return <CreatePost />
}

export default index