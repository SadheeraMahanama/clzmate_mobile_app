

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';
 

  const{width:WIDTH}= Dimensions.get('window')

  
  class  Login2 extends Component {
      static navigationOptions={
          header:null
      }
      constructor(props){
          super(props);
          this.state={
              username:'',
              password:''
               
  
          }
      }

      myAlert=() => {
          const {username,password} = this.state;
         if(username=="" && password==""){
             alert('Please enter Username and Password')
         }else if(username==""){
            alert('Please enter Username')
         }
         else if(password==""){
            alert('Please enter Password')
         }


          Keyboard.dismiss();
      }
  render() {
    return (
        

        <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper} >
                
               <ImageBackground style={styles.container} source={require('../images/flowers.jpg')}>
               <View style={styles.loginContainer}> 
               <Image style={styles.logo} source={require('../images/clz.jpg')}/>
               <Text style={styles.logoText}>ClzMate</Text>
                <Text style={styles.header}>LOGIN</Text>
                </View>

                <View>
                <TextInput 
                    placeholder='Username'
                    //placeholderTextColor= {'rgba(255,255,255,0.7)'}
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={
                        username => this.setState({username})
                    }
                />
                <TextInput 
                    placeholder='Password'
                    //placeholderTextColor='#292929'
                    secureTextEntry={true} 
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={
                         password => this.setState({password})
                    }
                />

                <TouchableOpacity onPress ={this.myAlert}
                style={styles.button}> 
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
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
       width:null,
       height:null,
       justifyContent:'center',
       alignItems:'center',
   },
   header:{
       fontSize: 38,
       color:'black',
       fontWeight:'bold',

   },
    logoText:{
    fontSize: 40,
    color:'black',
    fontWeight:'500',
    marginTop:10,
    opacity:0.5

},
   loginContainer:{
       alignItems:'center',
       paddingLeft:20,
       paddingRight:20,

   },
   textInput:{
        
       paddingLeft:65,
       backgroundColor:'rgba(0,0,0,0.35)',
       color:'rgba(255,255,255,0.7)',
       marginHorizontal : 25,
       marginBottom: '7%',
       borderRadius : 25,
       width:  WIDTH - 55,
       height : 45,
       fontSize:16,
       
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
   logo:{
       width:100,
       height:100,
   }

});
export default Login2;