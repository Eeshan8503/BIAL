import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

import Home from './Home/Home';
import Login from './Home/Login';
import Navbar from './Navbar/Navbar';
const RootStack=createStackNavigator({
  Home: {
    screen: Home, 
    navigationOptions: {
        headerShown: false,
    },
},
    Login:{
      screen:Login,
      navigationOptions: {
        headerShown: false,
    }, 

    },
    Dashboard:{
      screen: Navbar, 
      navigationOptions: {
          headerShown: false,
      }, 
    }
});
class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }
  export default createAppContainer(RootStack);