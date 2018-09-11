 import React, { Component } from 'react';
import {StyleSheet,Text,ImageBackground,View,Image} from 'react-native';
//import MenuItem from './screens/MenuItem';
   
export default  class  Views extends Component {
  render() {
    return (
        <ImageBackground style={styles.container} source={require('../images/login.jpeg')}>
         <View style={ styles.overlayContainer}>
            <View style={ styles.top}>
                <Text style={styles.header}>ClzMate</Text>
            </View>

            <View style={styles.menuContainer}>
                
            </View>


          </View>

 </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    height:'100%',
  },
  overlayContainer:{
      flex: 1,
      backgroundColor: 'rgba(47,163,218, .4)',
  },
  top:{
    height: '50%',
    alignItems: 'center',
    justifyContent : 'center',
  },
  header:{
    color: '#fff',
    fontSize : 28,
    borderColor : '#fff',
    borderWidth : 2,
    padding : 20,
    paddingLeft : 40,
    paddingRight : 40,
    backgroundColor : 'rgba(255,255,255, .1)',

  },
  menuContainer:{
      height: '40%',
      flexDirection :  'row',
      flexWrap : 'wrap',
    }
   
   
});
