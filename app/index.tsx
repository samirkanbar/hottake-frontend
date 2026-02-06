import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Button } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Tabs from './(tabs)/_layout';
import createpost from './screens/createpost';
import CreatePost from './screens/createpost';
import Discovery from './(tabs)/Discovery';

const index = () => {
  return <Discovery />
}

export default index
