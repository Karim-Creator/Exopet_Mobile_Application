import { Container, Button } from 'native-base';
import * as React from 'react';
import { View, Image, StatusBar, Text } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <Container style={{ flex: 1, backgroundColor: '#F2515D' }}>
            <StatusBar backgroundColor="#F2515D" barStyle="light-content" />
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 250 }}>
                <Image source={require('../assets/Images/Logo/logo.png')} style={{ height: '70%' }} />
            </View>

            <View
            style={{
                borderBottomColor: '#FFFFFF',
                borderBottomWidth: 5,
                width: 60,
                borderRadius: 10,
                marginBottom: 10,
                marginTop: 90,
                marginLeft: 15
            }}
            />
            <View style={{marginLeft: 15}}>
                <Text style={{fontSize: 35, color: '#FFFFFF', fontFamily:'Teko_regular'}}>
                    Welcome To 
                </Text>
                <Text style={{fontSize: 60, color: '#FFFFFF', fontFamily:'Teko_medium'}}>
                    Pet Addoption App
                </Text>
                <Text style={{fontSize: 20, color: '#FFFFFF', fontFamily:'Teko_regular'}}>
                    Like, Swipe And Adopt !
                </Text>
            </View>

            <View style={{paddingLeft: 20, paddingRight: 20, marginTop: 80}}>
                <Button style={{padding: 50, width: '100%',height: 55, justifyContent:'center', borderRadius: 10, backgroundColor:'#FFFFFF', borderColor: '#FFFFFF', marginBottom: 20}} bordered
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{alignSelf:'center', fontSize: 30, fontFamily: 'Teko_regular', color:'#F2515D'}}>Continue With Sign In</Text>
                </Button>
                <Button style={{padding: 50, width: '100%', justifyContent:'center', height: 55, borderRadius: 10,borderColor: '#FFFFFF'}} bordered
                onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{alignSelf:'center', color:'#FFFFFF', fontSize: 30, fontFamily: 'Teko_regular'}}>New User? Sign Up</Text>
                </Button>
            </View>

        </Container>
    );
}

export default WelcomeScreen