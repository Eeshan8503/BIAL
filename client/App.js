import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './Navbar/Navbar';
import Dashboard from './Home/Dashboard';
import Home from './Home/Home';

export default function App() {
return (
<Navbar/>
);
}