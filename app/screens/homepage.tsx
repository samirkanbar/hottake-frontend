import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'
import QaBox from '../components/qaBox'
import Poll from '../components/poll'
import UserIcons from '../components/userIcons'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center', marginTop: 10, padding: 10}}>
      <Text style={styles.title}>Suggested HOT TAKE</Text>
      <QaBox title='samir' content='kanbar' question='Is Jar Jar Binks a Sith lord' />
      <Text style={[styles.title, { marginTop: 80 }]}>Suggested Poll</Text>
      <Poll title='samir' content='kanbar' question='Is Jar Jar Binks a Sith lord' option1='' option2=''/>
      <View style={styles.circleContainer}>
        <UserIcons />   {/* your grid of 6 circles */}
      </View>
      <View>
        <Image
          source={require('../components/person-male.png')}
          style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    bottom: 10
  },
  circleContainer: {
    width: 350,               // match Poll width
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#aaa",
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 10,
  },


});