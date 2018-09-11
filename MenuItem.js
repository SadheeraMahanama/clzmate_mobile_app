 
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

 
 
 
export default class MenuItem extends Component {
  render() {
    return (
        <View style={styles.menuItem}>
        <Image 
            source={this.props.itemImage}
            style={styles.image}/>
    </View>
        
    );
  }
}

const styles = StyleSheet.create({
    menuItem:{
        width: '33.333333%',
        height : '50%',
        padding:20,
        backgroundColor: '#000',
        borderColor:'#000',
        borderWidth:2,

    },
    image:{
        width:'100%',
        height: '100%',
        opacity: 0.8,
        borderColor : '#fff',
        borderWidth: 3
    }
  
});
