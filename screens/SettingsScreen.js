 
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

 import { Button, Container, Header, Content, Left } from 'native-base'
 import Icon from 'react-native-vector-icons/FontAwesome';
//const myIcon = (<Icon name="rocket" size={30} color="#900" />)
 
 
 class  SettingsScreen extends Component {
  render() {
    return (
        <Container>
            <Header>
                <Left>
                    
                <Icon name="rocket" size={30} color="#900" />
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                </Left>
            </Header>
            <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}> 
                <Text>Settings Screen</Text>
            </Content>
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({
   
});

export default  SettingsScreen;