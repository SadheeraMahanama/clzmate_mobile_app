 
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

 import { Icon, Button, Container, Header, Content, Left } from 'native-base'
 
 
 class   LogoutScreen extends Component {
  render() {
    return (
        <Container>
            <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}> 
                <Text>Logout Screen</Text>
            </Content>
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({
   
});
export default  LogoutScreen;