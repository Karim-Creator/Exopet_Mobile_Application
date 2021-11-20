import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native'; 
import { Spinner } from 'native-base'


export default class SplashScreen extends Component {
    render(){
            return (
            <View style={{flex: 1,backgroundColor:'#F2515D',flexDirection:'column',justifyContent:'center'}}>
                <StatusBar backgroundColor="#F2515D" barStyle="light-content" />
                <Image source={require('../assets/Images/Logo/logo.png')} style={{alignSelf:'center',alignItems:'center',resizeMode:'contain'}} />
                <Spinner color='#ffffff' />
            </View>
            )
    }
}