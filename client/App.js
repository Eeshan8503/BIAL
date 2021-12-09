import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/rock.png')}/>
      <View
        style={{
          width:'100%',
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
         
      }}
      >
      <LinearGradient
        // Background Linear Gradient
        colors={['#0B0733', '#44369E']}
        style={{
          height:'100%',
          width:'100%',
          alignItems: 'center',
          
        }}
      >

      <Text
      style={{
        color:"white",
        fontSize:60,
        marginTop:55
      }}
      >
        BIAL Genie
      </Text>
      <Text
      style={{
        color:"#E5E5E5",
        fontSize:20,
        textAlign:"center"
      }}
      >Track luggage. Find lost luggage. Report unknown luggage</Text>
      <View
      style={{
        margin:90,
        height:80,
        width: '75%',
        backgroundColor:'#5451D6',
        justifyContent:"center",
        alignContent:'center',
        borderRadius:25
      }}
      >
        <Text
        style={{
          textAlign:'center',
          color:'white',
          fontSize:25
        }}
        >Get Started</Text>
      </View>
      </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:1000,
    marginTop:150
  },
});
