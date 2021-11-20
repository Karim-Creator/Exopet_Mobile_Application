import React, { Component } from 'react';
import { Button, Container } from 'native-base'
import HeaderBar from '../Components/Header';
import ProfileFooterBar from '../Components/Profile/Footer';
import ProfileAvatar from '../Components/Profile/Avatar';
import ProfileCardInfo from '../Components/Profile/CardInfo';
import AvatarInformation from '../Components/Profile/AvatarInformation';
import { Text, View, Icon, Switch } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import * as firebase from 'firebase';

//Logout Function
const signOut = () => {
    return firebase.auth().signOut()
        .then(() => {
            console.log("Logged Out!")
        })
        .catch(error => console.log(error))
}


export default class ProfileScreen extends Component {
    

    constructor() {
        super()
        this.state = {
            visible: false,
            distance: 30,
            minDistance: 10,
            maxDistance: 100
        }
    }

    UNSAFE_componentWillMount() {
        //Set The state To show/Hide
        this.setState({ visible: !this.state.visible })

    }
    _toggleShow = () => {
        this.setState({ showComponmentB: !this.state.showComponmentB })
    }
    _toggleShowA = () => {
        this.setState({ showComponmentA: !this.state.showComponmentA })
    }


    render() {
        return (
            <Container>
                {this.state.showComponmentB &&
                    <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%', width: '100%', zIndex: 999, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#FFF', height: 180, width: 250, borderRadius: 20 }}>
                            <View style={{ borderBottomColor: '#C0C0C0', borderBottomWidth: 1, alignItems: 'center', padding: 10, }}>
                                <Text style={{ color: '#000', fontFamily: 'Teko_regular', fontSize: 25 }}>
                                    Are You Sure ?
                            </Text>
                                <Text style={{ color: '#C0C0C0', fontFamily: 'Teko_light', fontSize: 20 }}>
                                    You Will be Logged Out
                            </Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
                                <Button style={{ borderRadius: 10, backgroundColor: 'green' }}
                                    onPress={this._toggleShow}
                                >
                                    <Text>Cancel</Text>
                                </Button>
                                <Button style={{ borderRadius: 10, borderColor: 'red', backgroundColor: 'red' }}
                                    //if pressed user will logout
                                    onPress={() => signOut()}
                                >
                                    <Text style={{ color: '#FFF', textAlign: 'center' }}>Logout</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                }
                {this.state.showComponmentA &&
                    <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%', width: '100%', zIndex: 999, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#fbfbfb', height: '90%', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 75 }}>
                            <View style={{ borderBottomColor: '#C0C0C0', borderBottomWidth: 1, alignItems: 'center', padding: 10, }}>
                                <Text style={{ color: '#000', fontFamily: 'Teko_regular', fontSize: 25 }}>
                                    App Settings
                            </Text>
                            </View>
                            <ScrollView>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
                                <View style={{ height: 130, width: 170, justifyContent: 'center', alignItems: 'center', elevation: 3, borderRadius: 10, backgroundColor: '#FFF' }}>
                                    <Icon name="flash" style={{ backgroundColor: '#fff', borderRadius: 30, fontSize: 30, padding: 10, elevation: 3, color: 'purple' }} />
                                    <Text style={{ color: 'purple', fontFamily: 'Teko_regular', fontSize: 20, paddingTop: 10 }}>
                                        Get Boosts
                                </Text>
                                </View>

                                <View style={{ height: 130, width: 170, justifyContent: 'center', alignItems: 'center', elevation: 3, borderRadius: 10, backgroundColor: '#FFF' }}>
                                    <Icon name="star" style={{ backgroundColor: '#fff', borderRadius: 30, fontSize: 30, padding: 10, elevation: 3, color: '#039be5' }} />
                                    <Text style={{ color: '#039be5', fontFamily: 'Teko_regular', fontSize: 20, paddingTop: 10 }}>
                                        Super Swipes
                                </Text>
                                </View>
                            </View>

                            <Text style={{ color: '#F2515D', fontSize: 25, fontFamily: 'Teko_medium', paddingLeft: 15, marginTop: 15 }}>
                                Discovery Settings
                            </Text>

                            <View style={{ backgroundColor: '#fff', elevation: 3, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10, width: '100%', height: 50, alignItems: 'center', paddingLeft: 20, paddingRight: 20, }}>
                                <Text style={{ color: '#000', fontFamily: 'Teko_regular', fontSize: 22 }}>
                                    Swiping On
                            </Text>

                                <Text style={{ color: '#039be5', fontFamily: 'Teko_medium', fontSize: 20 }}>
                                    My Current Location
                            </Text>

                            </View>

                            <View style={{ backgroundColor: '#fff', elevation: 3, borderRadius: 10, width: '100%', height: 150, paddingLeft: 20, paddingRight: 20, marginTop: 20, justifyContent: 'space-evenly' }}>
                                <Text style={{ color: '#F2515D', fontFamily: 'Teko_regular', fontSize: 30 }}>
                                    Show Me
                            </Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'Teko_medium', fontSize: 20 }}>
                                        Cats
                                </Text>
                                    <Switch />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'Teko_medium', fontSize: 20 }}>
                                        Dogs
                                </Text>
                                    <Switch />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#000', fontFamily: 'Teko_medium', fontSize: 20 }}>
                                        All
                                </Text>
                                    <Switch value={true} trackColor={{ true: '#F2515D', false: 'grey' }} thumbColor='#F2515D' />
                                </View>

                            </View>

                            <View style={{ backgroundColor: '#fff', elevation: 3, borderRadius: 10, width: '100%', height: 90, paddingLeft: 20, paddingRight: 20, marginTop: 20, justifyContent: 'space-evenly' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <Text style={{ color: '#F2515D', fontFamily: 'Teko_regular', fontSize: 30 }}>
                                        Maximum Distance
                                </Text>

                                    <Text style={{ color: '#000', fontFamily: 'Teko_regular', fontSize: 30 }}>
                                    {this.state.distance + ' km'}
                                </Text>

                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Slider
                                        style={{ width: 300, height: 40 }}
                                        step={1}
                                        minimumValue={this.state.minDistance}
                                        maximumValue={this.state.maxDistance}
                                        value={this.state.distance}
                                        onValueChange={val => this.setState({ distance: val })}
                                        minimumTrackTintColor="red"
                                        maximumTrackTintColor="#C0C0C0"
                                        thumbTintColor="red"
                                    />
                                </View>

                            </View>

                            <Text style={{ color: '#F2515D', fontSize: 25, fontFamily: 'Teko_medium', paddingLeft: 15, marginTop: 15 }}>
                                Contact Us
                            </Text>
                            <View style={{ backgroundColor: '#fff', elevation: 3, justifyContent: 'center', flexDirection: 'row', borderRadius: 10, width: '100%', height: 50, alignItems: 'center', paddingLeft: 20, paddingRight: 20, }}>
                                <Text style={{ color: '#000', fontFamily: 'Teko_regular', fontSize: 22 }}>
                                    Help & Support
                                </Text>
                            </View>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, marginBottom: 20 }}>
                                <Button style={{ borderRadius: 10,  borderColor: 'grey' }}
                                    onPress={this._toggleShowA}
                                    bordered
                                >
                                    <Text style={{color:'grey'}}>Cancel</Text>
                                </Button>
                                <Button style={{ borderRadius: 10, borderColor: 'green', backgroundColor: 'green', padding: 15 }}
                                    //if pressed user will logout
                                    onPress={this._toggleShowA}
                                >
                                    <Text style={{ color: '#FFF', textAlign: 'center' }}>Save</Text>
                                </Button>
                            </View>
                            </ScrollView>

                        </View>
                    </View>
                }

                <HeaderBar navigation={this.props.navigation} />


                <ProfileAvatar />
                <ProfileCardInfo />
                <AvatarInformation />

                <View style={{ flexDirection: 'column', paddingLeft: 15, zIndex: 1 }}>

                    <View style={{ width: 360, height: 100, borderRadius: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center', elevation: 5, backgroundColor: '#fff' }}>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={this._toggleShowA}
                        >
                            <Icon name="cog-outline" style={{ backgroundColor: '#FFE8EE', color: '#DB5555', borderRadius: 30, fontSize: 25, padding: 10 }} />

                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '80%', alignItems: 'center' }}>

                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: 25, fontFamily: 'Teko_regular' }}>
                                        Settings
                                    </Text>
                                    <Text style={{ fontSize: 20, fontFamily: 'Teko_regular', color: '#C0C0C0' }}>
                                        Change And Save Your Settings
                                    </Text>
                                </View>

                                <Icon name="chevron-forward" />
                            </View>

                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 15, zIndex: 1 }}>

                    <View style={{ width: 360, height: 100, borderRadius: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center', elevation: 5, backgroundColor: '#fff' }}>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={this._toggleShow}
                        >
                            <Icon name="power-outline" style={{ backgroundColor: '#FFE8EE', color: '#DB5555', borderRadius: 30, fontSize: 25, padding: 10 }} />

                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '80%', alignItems: 'center' }}>

                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: 25, fontFamily: 'Teko_regular' }}>
                                        Log Out
                                    </Text>
                                    <Text style={{ fontSize: 20, fontFamily: 'Teko_regular', color: '#C0C0C0' }}>
                                        You Will Be Logged Out
                                    </Text>
                                </View>

                                <Icon name="chevron-forward" />
                            </View>

                        </TouchableOpacity>

                    </View>
                </View>

                <ProfileFooterBar navigation={this.props.navigation} />
            </Container>
        )
    }
}