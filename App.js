 
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {  DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogoutScreen from './screens/LogoutScreen';
import ExitScreen from './screens/ExitScreen';



import  MenuItem  from './screens/MenuItem';
import Splash from './screens/Splash';
import Login2 from './screens/Login2';
import Login from './screens/Login';

const Application =  DrawerNavigator(
  {
    Messages : HomeScreen,
    Settings : SettingsScreen,
    Logout : LogoutScreen,
    Exit : ExitScreen

  },
  {
     
  }
);
 
 
export default class App extends Component {
  render() {
    return (
      <Application/> 
        
    );
  }
}

const styles = StyleSheet.create({
   
});