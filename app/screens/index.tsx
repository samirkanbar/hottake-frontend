import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import qaBox from '../components/qaBox'
import { SafeAreaView } from 'react-native-safe-area-context'
import QaBox from '../components/qaBox'

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to the home page</Text>
      <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center', marginTop: 10}}>
        <QaBox title='samir' content='kanbar' question='Is Jar Jar Binks a Sith lord'/>
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
    fontSize: 25
  }
});