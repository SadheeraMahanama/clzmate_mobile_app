
 
import React, { Component } from 'react';
import {
  StyleSheet,View,Text,TouchableWithoutFeedback,
} from 'react-native';

 
 
 
export default class  Test2 extends Component {
  render() {
    return (
        <TouchableWithoutFeedback onPress={this._addOne}>
        <View style={styles.embedded}>
          <Text>Click me</Text>
        </View>
        <Text accessibilityLiveRegion="polite">
        Clicked {this.state.count} times
      </Text>
      </TouchableWithoutFeedback>
      
        
    );
  }
}

const styles = StyleSheet.create({
   
});
















