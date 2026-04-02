import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const UserSettings = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.header}>Settings</Text>

        {/* Username */}
        <View style={styles.card}>
          <Text style={styles.label}>Username</Text>
          <TextInput 
            style={styles.input}
            placeholder="carterthegoat"
            placeholderTextColor="#888"
          />
        </View>

        {/* Password (NOT editable) */}
        <View style={styles.card}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput 
              style={styles.passwordInput}
              value="bestOfTheBest" // replace with real value
              editable={false}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity 
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Ionicons 
                name={passwordVisible ? "eye-off" : "eye"} 
                size={22} 
                color="#555" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Email */}
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            placeholder="millionare@google.gold"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
        </View>

        {/* DOB */}
        <View style={styles.card}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput 
            style={styles.input}
            placeholder="08/31/2005"
            placeholderTextColor="#888"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default UserSettings;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#444',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#000',
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});