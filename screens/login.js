import { StatusBar } from 'expo-status-bar';
import { Container, Item, Input, Icon, Button } from 'native-base';
import React, { Component, useRef, useEffect } from 'react';
import { Text, View, Animated, Image } from 'react-native';
import * as firebase from 'firebase';



const FadeInView = (props) => {

    // Fade Animation Start
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
    // Fade Animation End
}


export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };

      }


      SignIn  () {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() =>{
            console.log("logged in!")
            // this.props.navigation.navigate("Boarding")
        })
        .catch(error => console.log(error))
      };

    render() {
        return (
            <Container style={{ backgroundColor: '#F2515D' }}>
                <StatusBar translucent backgroundColor="transparent" style="light" />
                {/* Height And Width Dimension To Avoid Android Keyboard From Resizing Background Image */}

                <View style={{ justifyContent: 'center', alignItems: 'center', height: 250 }}>
                    <Image source={require('../assets/Images/Logo/logo.png')} style={{ height: '70%' }} />
                </View>

                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, justifyContent: 'center', marginTop: 150 }}>
                    <FadeInView>

                        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginLeft: 20 }}>

                            <Text style={{ color: '#FFFFFF', fontFamily: 'Teko_regular', alignSelf: 'center', fontSize: 35 }}>Login</Text>


                            <Text style={{ color: '#B8B8B8', fontFamily: 'Teko_regular', alignSelf: 'center', fontSize: 35, paddingLeft: 20, }}
                            onPress={() => this.props.navigation.navigate('Register')}
                            >Register</Text>


                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 50 }}>

                            <View
                                style={{
                                    borderBottomColor: '#FFFFFF',
                                    borderBottomWidth: 4,
                                    width: 65,
                                    borderRadius: 10,
                                    marginLeft: 20
                                }}
                            />
                            <View style={{ position: 'absolute', }}>

                                <View
                                    style={{
                                        borderBottomColor: '#B8B8B8',
                                        borderBottomWidth: 4,
                                        width: 110,
                                        borderTopRightRadius: 10,
                                        borderBottomRightRadius: 10,
                                        marginLeft: 83
                                    }}
                                />
                            </View>

                        </View>


                        <Item rounded style={{ marginLeft: 20, marginRight: 20, marginBottom: 20, borderColor: '#fff' }}>
                            <Icon active name='mail-outline' style={{ color: '#fff' }} />
                            <Input placeholder='Your Email' placeholderTextColor="#fff" style={{ color: '#fff' }}

                            autoCorrect={false}
                            autoCapitalize= "none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}

                            />
                        </Item>

                        <Item rounded style={{ marginLeft: 20, marginRight: 20, borderColor: '#fff' }}>
                            <Icon active name='lock-closed-outline' style={{ color: '#fff' }} />
                            <Input placeholder='Your Password' placeholderTextColor="#fff" style={{ color: '#fff' }}

                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}

                            />
                        </Item>

                        <Button style={{ alignSelf: 'center', marginTop: 30, borderRadius: 10, padding: 80, backgroundColor: '#FFFFFF' }}
                        onPress={() => this.SignIn(this.state.email, this.state.password)}

                        >
                            <Text style={{ color: '#F2515D', fontSize: 30, fontFamily: 'Teko_regular' }}>Login</Text>
                        </Button>

                        <Text style={{ color: '#fff', alignSelf: 'center', marginTop: 15 }}>
                            Don't Have An Account ?
                        <Text style={{ color: '#FFFFFF', textDecorationLine: 'underline' }}
                                onPress={() => this.props.navigation.navigate('Register')}
                            > Sign Up</Text>
                        </Text>

                    </FadeInView>
                </View>

            </Container>
        );
    }
}
