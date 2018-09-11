 
import React, { Component } from 'react';
import {StyleSheet,Image,Button,View,Text} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import {  DrawerNavigator } from 'react-navigation';
 
 
 
 
 class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.header}>Vimu</Text>
      </View>
      
        
    );
  }
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent : 'center',
     alignItems:'center'
   }
});
export default Drawer;