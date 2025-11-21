import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useRef } from 'react'

const Events = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleEventSelect = () => {
    bottomSheetRef.current?.expand();
    console.log('carter');
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ScrollView style={{flex: 1}}>
        <Text>Events</Text>
        <TouchableOpacity onPress={handleEventSelect}>
          <View style={styles.eventsContainer} />
        </TouchableOpacity>
      </ScrollView>

      <GestureHandlerRootView>
        <BottomSheet>
          <BottomSheetView>
            
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default Events

const styles = StyleSheet.create({
  eventsContainer: {
    width: 350,
    height: 100,
    backgroundColor: "#616161",
    borderRadius: 20
  }
})