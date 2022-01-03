import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

import Home from './Home/Home';
import Login from './Home/Login';
import Navbar from './Navbar/Navbar';
import Welcome from './Home/Welcome';
import History from './Home/History';
import TripHistory from './Home/TripHistory';
import WelcomeNav from './Navbar/WelcomeNavbar'
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
    },
    Welcome:{
      screen: WelcomeNav, 
      navigationOptions: {
          headerShown: false,
      }, 
    },
    History:{
      screen: TripHistory, 
      navigationOptions: {
          headerShown: true,
      }, 
    },
    BagHistory:{
      screen: History, 
      navigationOptions: {
          headerShown: true,
      }, 
      headerStyle: {
        backgroundColor: '#44369E'
     }
    },
});
class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }
  export default createAppContainer(RootStack);