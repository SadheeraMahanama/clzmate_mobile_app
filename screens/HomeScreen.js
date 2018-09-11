 
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

 import { Icon, Button, Container, Header, Content, Left } from 'native-base'
 
 
 class HomeScreen extends Component {
  render() {
    return (
        <Container>
             <Header>
                <Left>
                    <Icon name = "ios-menu" 
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                </Left>
            </Header>
            <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}> 
                <Text>Msg to teacher</Text>
            </Content>
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({
   
});
export default HomeScreen;