import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useRef, useMemo } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import EventTitle from '../components/EventTitle';
import EventBanner from '../components/EventBanner';
import EventDescription from '../components/EventDescription';
import RSVPButton from '../components/RSVPButton';

const Events = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['90%'], []);

  const handleEventSelect = () => {
    bottomSheetRef.current?.expand();
    console.log('carter');
  }

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    Fraunces_700Bold,
    Fraunces_400Regular
  });

  const [Title, onChangeTitle] = React.useState(String);
  const [content, onChangeContent] = React.useState(String);
  const [tags, onChangeTags] = React.useState(String);

  const handleGoBack = () => {
    console.log('Navigating back/closing screen...'); 
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text>Events</Text>
          <TouchableOpacity onPress={() => handleEventSelect()}>
            <View style={styles.eventsContainer} />
          </TouchableOpacity>
        </ScrollView>

        
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            index={-1}
            enablePanDownToClose
            backdropComponent={BottomSheetBackdrop}
          >
            <BottomSheetView style={{flex: 1}}>
                <LinearGradient
                  colors={['#ffe8baff', '#ffdb77ff', '#ed3e3eff']}
                  style={{flex: 1}}
                >
                    <EventTitle event_name = "Event Name"/>
                    <EventBanner/>
                    <EventDescription event_desc='Description goes here'/>
                    <RSVPButton />
                </LinearGradient>
            </BottomSheetView>
          </BottomSheet>
        </SafeAreaView>
      </GestureHandlerRootView>
  )
}

export default Events

const styles = StyleSheet.create({
  eventsContainer: {
    width: 350,
    height: 100,
    backgroundColor: "#616161",
    borderRadius: 20
  },
  bottomSheetContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
})