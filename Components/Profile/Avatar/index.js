import React, { Component } from 'react';
import { Thumbnail, Text, View, Icon } from 'native-base';
import * as firebase from 'firebase';



//Get Current User Info
const user = firebase.auth().currentUser;

//Check If The User Is Logged In
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User email: ', user.email);
    }
    else {
        console.log('User Is Not Logged In!')
    }
});

//Generates random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default class ProfileAvatar extends Component {
    render() {
        return (

            <View>
                <View>
                    <Text style={{ color: 'red', fontFamily: 'Teko_medium', fontSize: 40, paddingLeft: 15, paddingTop: 15, paddingBottom: 10 }}>Profile</Text>

                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', paddingLeft: 10 }}>

                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <Thumbnail source={require('../../../assets/Images/Messages/Likes/one.jpg')} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 10, width: 300 }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Text style={{ color: '#000', fontFamily: 'Teko_regular', fontSize: 28, }}>{user.email}</Text>
                                <Icon name="checkmark-circle" style={{ color: 'limegreen', fontSize: 20, paddingLeft: 5 }} />

                            </View>
                            <Text style={{ color: 'grey', fontFamily: 'Teko_light', fontSize: 25 }}># {getRandomInt(111111)}</Text>
                        </View>

                    </View>

                </View>

            </View>

        );
    }
}