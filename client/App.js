import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

import Home from './Home/Home';
import Login from './Home/Login';
const RootStack=createStackNavigator({
    Home:Home,
    Login:Login
})
const Appp = createAppContainer(RootStack);
class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }
  export default createAppContainer(RootStack);