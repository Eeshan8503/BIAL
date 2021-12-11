import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './Navbar/Navbar';
import Abc from './TEST/Abc';
import Def from './TEST/Def';
const Drawer = createDrawerNavigator();
export default function App() {
return (
<NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={Abc} />
<Drawer.Screen name="Settings" component={Def} />
</Drawer.Navigator>
</NavigationContainer>
);
}