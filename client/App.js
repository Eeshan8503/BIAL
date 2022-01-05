import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

import Home from './Home/Home';
import Login from './Home/Login';
import Navbar from './Navbar/Navbar';
import Welcome from './Home/Welcome';
import History from './Home/History';
import TripHistory from './Home/TripHistory';
import TripCard from './Home/TripCard';
import WelcomeNav from './Navbar/WelcomeNavbar'
import TripForm from './Home/TripForm';
import LuggageForm from './Home/LuggageForm'
const RootStack=createStackNavigator({

  Home: {
    screen: Home, 
    navigationOptions: {
        headerShown: false,
    },
},
    Trip: {
    screen: TripForm, 
    navigationOptions: {
        headerShown: false,
    },
},
LuggageForm: {
  screen: LuggageForm, 
  navigationOptions: {
      headerShown: true,
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