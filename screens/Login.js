

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

  

  
  class  Login extends Component {
      static navigationOptions={
          header:null
      }

      constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount(){
        this.loadInitiolState().done();
    }

    loadInitiolState = async () => {
        var value = await AsyncStorage.getItem('token');
        if (value !== null){
            this.props.navigation.navigate('Details');
        }
    }

    login = () => {
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })

        .then((response) => response.json())
        .then((res) => {

            if (res.state===true){
               AsyncStorage.setItem('token',res.token);
               this.props.navigation.navigate('Test1');
            } else {
                alert('no responce from backend')
            }
        })
        .done();
    }

      

  render() {
    const { navigation } = this.props;
    return (
        

        <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper} >
                
               <ImageBackground style={styles.container} source={require('../images/login.jpeg')}>
               <View style={styles.loginContainer}> 
                <Text style={styles.header}>LOGIN</Text>

                <TextInput 
                    placeholder='Username'
                    //placeholderTextColor='#292929'
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                />
                <TextInput 
                    placeholder='Password'
                    //placeholderTextColor='#292929'
                    secureTextEntry={true} 
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                />

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.edit}>Forgot Password?</Text>
                 </View>
                 </ImageBackground>
        </KeyboardAvoidingView>

      
    );
  }
}

const styles = StyleSheet.create({
   wrapper:{
       flex:1, 
   },
   container:{
       flex:1,
       alignSelf:'stretch', 
       width:null,
       justifyContent:'center',
       alignItems:'stretch',
   },
   header:{
       fontSize: 38,
       color:'black',
       fontWeight:'bold',

   },
   loginContainer:{
       alignSelf:'center',
       paddingLeft:20,
       paddingRight:20,

   },
   textInput:{
       alignSelf : 'stretch',
       padding:20,
       backgroundColor:'rgba(255,255,255,0.8)',
       marginBottom : '7%',
       borderRadius : 25,
       width: 370
       
   },
   button:{
       alignSelf:'center',
       marginTop:20,
       backgroundColor : 'rgba(0,0,0,0.8)',
       alignItems : 'center',
       padding:20,
       borderRadius : 25,
       width: 200
     },
   btntext:{
       color:'#fff',
       fontSize:18,
   },
   edit:{
       color:'#000',
       fontSize:16,
       alignItems:'center',
       marginLeft:'60%',
    
   }

});
export default Login;