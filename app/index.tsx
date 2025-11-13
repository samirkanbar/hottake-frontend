import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Button } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import CreateStatement from './screens/createstatement';
import CreateQuestion from './screens/createquestion';
import CreatePoll from './screens/createpoll';

const index = () => {
  return <CreateQuestion/>
}

export default index