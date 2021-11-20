import React, { Component } from 'react';
import { Thumbnail, Text, View } from 'native-base';

export default class MessagesLike extends Component {
    render() {
        return (

            <View>
                <Text style={{ color: 'red', fontFamily: 'Teko_medium', fontSize: 25, paddingLeft: 15, paddingTop: 15, paddingBottom: 10 }}>Recently Liked</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <View style={{ justifyContent:'center', alignItems:'center'}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/one.jpg')} />
                        <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 23}}>Casey</Text>
                    </View>
                    <View style={{ justifyContent:'center', alignItems:'center'}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/two.jpg')} />
                        <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 23}}>Zoe</Text>
                    </View>
                    <View style={{ justifyContent:'center', alignItems:'center'}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/three.jpg')} />
                        <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 23}}>Luna</Text>
                    </View>
                    <View style={{ justifyContent:'center', alignItems:'center'}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/four.jpg')} />
                        <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 23}}>Oreo</Text>
                    </View>

                </View>
            </View>

        );
    }
}