<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navbar from '../Navbar/Navbar';
import { LinearGradient } from 'expo-linear-gradient';
export default function Welcome({ navigation }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#44369E', '#0B0733']}
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center'
      }}
    >
      <View style={styles.container}>
        <Image
          source={require('./../assets/pp.png')}
          style={{
            height: 150,
            width: 150,
            borderWidth: 5,
            borderColor: 'grey',
            borderRadius: 90,
            marginLeft: 20
          }}
        />
        <View
          style={{
            marginTop: 20
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white'
            }}
          >
            Email: test@bial.app
          </Text>
          <Text
=======
import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
export default function Welcome({navigation}) {
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={['#44369E','#0B0733']}
        style={{
          height:'100%',
          width:'100%',
          alignItems: 'center',
          
        }}
      >
      <View style={styles.container}>
            <Image
            source={require("./../assets/pp.png")}
>>>>>>> d977927a6d774c8a828e8f8989a8bc4d0462847a
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white'
            }}
          >
            Name: Test Singh
          </Text>
        </View>

        <TouchableOpacity
          style={{
            marginTop: '10%',
            height: 80,
            width: 300,
            backgroundColor: '#5451D6',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: 25
          }}
<<<<<<< HEAD
          onPress={() => navigation.navigate('Dashboard')}
        >
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 25
              }}
            >
              Start new Trip +
            </Text>
=======
          onPress={()=>navigation.navigate('Trip')}
          >
          <View>
            <Text
            style={{
              textAlign:'center',
              color:'white',
              fontSize:25
            }}
            >Start new Trip +</Text>
>>>>>>> d977927a6d774c8a828e8f8989a8bc4d0462847a
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100
  }
});
