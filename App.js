 
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Views from './screens/Views';
import Test1 from './screens/Test1';
import  MenuItem  from './screens/MenuItem';
import Splash from './screens/Splash';
import Login2 from './screens/Login2';
import Login from './screens/Login';
/*const Application = createStackNavigator(
  {
    Welcome : Splash,
    //Home : Login,
    Details :  DetailsScreen,
    Drawer : Drawer
  },
  {
     
  }
);*/
 
 
export default class App extends Component {
  render() {
    return (
      <Test1/> 
        
    );
  }
}

const styles = StyleSheet.create({
   
});