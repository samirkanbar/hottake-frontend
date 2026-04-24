// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import React, { useState } from 'react';
// import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
// import {RobotoCondensed_400Regular,RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';

// const Profile = () => {
//   const [fontsLoaded] = useFonts({
//     RobotoCondensed_400Regular,
//     RobotoCondensed_700Bold,
//     Fraunces_700Bold,
//     Fraunces_400Regular
//   });
  

//   const handleGoBack = () => { // Replace this with actual navigation or modal closing logic
//     console.log('Navigating back/closing screen...'); 
//   };

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (

//     <LinearGradient colors={['#ffe989', '#ff9350', '#ff3131']} style={{flex: 1}}>
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.contentWrapper} showsVerticalScrollIndicator={false}>

//         {/* header with back and profile */}
//           <View style={styles.headerInner}>
//             <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
//               <Ionicons name="close" size={28} color="#000" /> 
//             </TouchableOpacity>
//               <View style={styles.headerTitleWrapper}>
//                 <Text style={styles.title}>Profile</Text>      
//               </View>
//           </View>

//         {/* profile photo */}
//           <View style={{ alignItems: "center", marginTop: 20}}>
//             <View style={styles.ProfileView}>
//               <Image source={{ uri: 'https://avatar.iran.liara.run/public/18' }} style={styles.profileImage} />
//             </View>
//           </View>


//         <View style={{ alignItems: 'center', marginTop: 20}}>
//           <Text style={styles.title}>@Username</Text>
//         </View>
//           <>
          

//         <View style={{ alignItems: 'flex-start', marginTop: 20}}>
//           <Text style={styles.subtitle}>Your Posts:</Text>
//         </View>
        
//         <View style={{ alignItems: 'flex-start', marginTop: 20}}>
//           <Text style={styles.subtitle}>Your Comments:</Text>
//         </View>

        

//         <View>  
        


//         </View>

//    </ScrollView>
//    </SafeAreaView>
// </LinearGradient>
//     );
//     }

// export default Profile;

// const styles = StyleSheet.create({

//   container: {
//     flex: 1, 
//     paddingTop: 0, 
//     paddingHorizontal: 15,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     width: '100%',
//   },
  
//   headerInner: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },

//   headerTitleWrapper: {
//     marginLeft: 15,
//     flexShrink: 1, 
//   },

//   contentWrapper: {
//     flex: 1,
//     width: '100%',
//     paddingBottom: 50,
//   },

//   inputContainer: {
//   },

//   title: {
//     fontSize: 30,
//     fontFamily: 'Fraunces_700Bold',
//     color: '#000',
//     marginTop: 0,
//     marginBottom: 0, 
//   },

//   closeButton: { 
//     padding: 5,
//   },

//   subtitle: { 
//     fontSize: 20,
//     fontFamily: 'Fraunces_400Regular',
//     marginTop: 30,
//     marginBottom: 0,
//   },
  
//   firstSubtitle: {
//     fontSize: 20,
//     fontFamily: 'Fraunces_400Regular',
//     marginTop: 5, 
//     marginBottom: 0,
//   },

//   input_small: {
//     marginTop: 10,
//     marginBottom: 30,
//     height: 50,
//     width: '100%', 
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFF',
//     fontFamily: 'RobotoCondensed_400Regular',

//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,

//   },
//   input_large: {
//     marginTop: 10,
//     marginBottom: 30,
//     height: 100,
//     width: '100%', 
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     backgroundColor: '#FFF',
//     fontFamily: 'RobotoCondensed_400Regular',

//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//   },


//   button: {
//     marginTop: 20,
//     backgroundColor: "#000000ff",
//     borderRadius: 20,
//     height: 50,
//     width: 200,
//     justifyContent: 'center',
//     alignItems:'center',
//   },


//   ProfileView: { 
//     height: 150,
//     width: 150,
//     borderRadius: 100,
//     borderWidth: 3,
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   profileImage: {
//     height: 150,
//     width: 150,
//     borderRadius: 100,
//     resizeMode: 'cover',
//   }
// });

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';
import { RobotoCondensed_400Regular, RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    Fraunces_700Bold,
    Fraunces_400Regular
  });

  const handleGoBack = () => {
    console.log('Navigating back/closing screen...');
  };

  const handleSettings = () => {
    console.log('Open settings...');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={['#ffe989', '#ff9350', '#ff3131']} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.contentWrapper}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* header */}
          <View style={styles.headerInner}>
            <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
              <Ionicons name="close" size={28} color="#000" />
            </TouchableOpacity>

            <View style={styles.headerTitleWrapper}>
              <Text style={styles.title}>Profile</Text>
            </View>

            <TouchableOpacity onPress={handleSettings} style={styles.settingsButton}>
              <Ionicons name="settings-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* profile photo */}
          <View style={styles.profileSection}>
            <View style={styles.ProfileView}>
              <Image
                source={{ uri: 'https://avatar.iran.liara.run/public/18' }}
                style={styles.profileImage}
              />
            </View>

            <Text style={styles.profileName}>Name</Text>
            <Text style={styles.username}>@username</Text>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>120</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>80</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>24</Text>
                <Text style={styles.statLabel}>Hot Takes</Text>
              </View>
            </View>
          </View>

          {/* posts section */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Ionicons name="flame-outline" size={20} color="#000" />
              <Text style={styles.sectionTitle}>Your Posts</Text>
            </View>

            <View style={styles.contentCard}>
              <Text style={styles.cardTitle}>No posts yet</Text>
              <Text style={styles.cardText}>
                Start sharing your hottest takes and they’ll show up here.
              </Text>
            </View>
          </View>

          {/* comments section */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Ionicons name="chatbubble-ellipses-outline" size={20} color="#000" />
              <Text style={styles.sectionTitle}>Your Comments</Text>
            </View>

            <View style={styles.contentCard}>
              <Text style={styles.cardTitle}>No comments yet</Text>
              <Text style={styles.cardText}>
                Join the conversation and your comments will appear here.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },

  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },

  headerTitleWrapper: {
    marginLeft: 15,
    flexShrink: 1,
  },

  settingsButton: {
    marginLeft: 'auto',
    padding: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },

  contentWrapper: {
    flex: 1,
    width: '100%',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 120,
  },

  inputContainer: {
  },

  title: {
    fontSize: 30,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
    marginTop: 0,
    marginBottom: 0,
  },

  closeButton: {
    padding: 5,
  },

  subtitle: {
    fontSize: 20,
    fontFamily: 'Fraunces_400Regular',
    marginTop: 30,
    marginBottom: 0,
  },

  firstSubtitle: {
    fontSize: 20,
    fontFamily: 'Fraunces_400Regular',
    marginTop: 5,
    marginBottom: 0,
  },

  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },

  profileName: {
    fontSize: 30,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
    marginTop: 18,
  },

  username: {
    fontSize: 18,
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#333',
    marginTop: 4,
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 18,
    width: '95%',
  },

  statBox: {
    flex: 1,
    alignItems: 'center',
  },

  statDivider: {
    width: 1,
    height: 34,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },

  statNumber: {
    fontSize: 22,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
  },

  statLabel: {
    fontSize: 14,
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#333',
    marginTop: 3,
  },

  sectionCard: {
    width: '100%',
    marginTop: 28,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 24,
    padding: 16,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 8,
  },

  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
  },

  contentCard: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderRadius: 20,
    padding: 18,
    minHeight: 95,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontFamily: 'Fraunces_700Bold',
    color: '#000',
    marginBottom: 6,
  },

  cardText: {
    fontSize: 15,
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#333',
    lineHeight: 22,
  },

  input_small: {
    marginTop: 10,
    marginBottom: 30,
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    fontFamily: 'RobotoCondensed_400Regular',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  input_large: {
    marginTop: 10,
    marginBottom: 30,
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    fontFamily: 'RobotoCondensed_400Regular',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#000000ff",
    borderRadius: 20,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ProfileView: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 3,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.22)',
  },

  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    resizeMode: 'cover',
  }
});