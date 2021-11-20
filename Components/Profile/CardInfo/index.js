import React, { Component } from 'react';
import { Thumbnail, Text, View, Icon } from 'native-base';

export default class ProfileCardInfo extends Component {
    render() {
        return (

            <View style={{marginBottom: 20}}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <View style={{backgroundColor:'#8251FE', width:175, height: 90, borderRadius: 10}}>

                        <Text style={{color:'#FFF', fontFamily: 'Teko_light', fontSize: 25, marginLeft: 20, marginTop: 10}}>
                            Pets Liked
                        </Text>
                        <Text style={{color:'#FFF', fontFamily: 'Teko_medium', fontSize: 35, marginLeft: 20}}>
                            34
                        </Text>

                    </View>

                    <View style={{backgroundColor:'#FE3D70', width:175, height: 90, borderRadius: 10}}>

                        <Text style={{color:'#FFF', fontFamily: 'Teko_light', fontSize: 25, marginLeft: 20, marginTop: 10}}>
                            Your Type
                        </Text>
                        <Text style={{color:'#FFF', fontFamily: 'Teko_medium', fontSize: 35, marginLeft: 20}}>
                            67% Cats
                        </Text>

                    </View>

                </View>
            </View>

        );
    }
}