import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Abc from './../TEST/Abc';
import Def from './../TEST/Def';
const Navbar = () => {
  const Drawer = createDrawerNavigator();
return (
  // <View style={styles.container}>
  <NavigationContainer >
  <Drawer.Navigator initialRouteName="Settings" screenOptions={{
    
    drawerStyle: {
      backgroundColor: '#5451D6',
      width: '50%',
    },
    headerTitleAlign: 'center',
    headerTitle:  (props) => (
      <Image
        style={{ width: 200, height: 50 }}
        source={require('./../assets/rocket.png')}
        resizeMode='contain'
      />
    ),
    headerTintColor: 'white',
    headerStyle: {
    backgroundColor: '#5451D6', //Set Header color
    
    },
    // drawerIcon:{
    //   color:'red'
    // }
  }} >
  <Drawer.Screen name="Settings" component={Def} options={
    {
      drawerLabelStyle:{
        color:'white',
        
        
      }
    }
  } />
  <Drawer.Screen name="Home" component={Abc} options={
    {
      drawerLabelStyle:{
        color:'white'
      }
    }
  } />
  </Drawer.Navigator>
  </NavigationContainer>
  // </View>
      );
    }
    
const styles = StyleSheet.create({
container: {
  backgroundColor: '#5451D6',
  alignItems: 'center',
  justifyContent: 'center',
  height:100,
  zIndex:-1
},
});


export default Navbar
