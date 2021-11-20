import React, { Component } from 'react';
import { Thumbnail, Text, View } from 'native-base';

export default class MessagesMsg extends Component {
    render() {
        return (

            <View style={{marginBottom: 40}}>
                <Text style={{ color: 'red', fontFamily: 'Teko_medium', fontSize: 25, paddingLeft: 15, paddingTop: 15, paddingBottom: 10 }}>Messages</Text>

                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', paddingLeft: 10 }}>

                    <View style={{flexDirection:'row',marginBottom: 15}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/one.jpg')} />
                        <View style={{flexDirection:'column', justifyContent:'center', paddingLeft: 10, width: 300}}>
                            <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 28,}}>Alex, Casey</Text>
                            <Text style={{color:'grey', fontFamily: 'Teko_light', fontSize: 25,}} numberOfLines = { 1 } >Yeah, How About We do Something Next Week-End</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',marginBottom: 15}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/six.jpg')} />
                        <View style={{flexDirection:'column', justifyContent:'center', paddingLeft: 10, width: 300}}>
                            <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 28,}}>Aaron, Flash</Text>
                            <Text style={{color:'grey', fontFamily: 'Teko_light', fontSize: 25,textTransform: 'capitalize'}} numberOfLines = { 1 } >Your Pet Looks So Good, I Want To Adopt a pet this wekk but</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',marginBottom: 15}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/seven.jpg')} />
                        <View style={{flexDirection:'column', justifyContent:'center', paddingLeft: 10, width: 300}}>
                            <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 28,}}>Nadia, Leo</Text>
                            <Text style={{color:'grey', fontFamily: 'Teko_light', fontSize: 25,textTransform: 'capitalize'}} numberOfLines = { 1 } >Hello There</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',marginBottom: 15}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/two.jpg')} />
                        <View style={{flexDirection:'column', justifyContent:'center', paddingLeft: 10, width: 300}}>
                            <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 28,}}>Sofia, Zoe</Text>
                            <Text style={{color:'grey', fontFamily: 'Teko_light', fontSize: 25,textTransform: 'capitalize'}} numberOfLines = { 1 } >sorry but i can't.</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',marginBottom: 15}}>
                        <Thumbnail large source={require('../../../assets/Images/Messages/Likes/four.jpg')} />
                        <View style={{flexDirection:'column', justifyContent:'center', paddingLeft: 10, width: 300}}>
                            <Text style={{color:'#000', fontFamily: 'Teko_regular', fontSize: 28,}}>Jonny, Oreo</Text>
                            <Text style={{color:'grey', fontFamily: 'Teko_light', fontSize: 25,textTransform: 'capitalize'}} numberOfLines = { 1 } >That Sounds Good, okay i'll see you next monday</Text>
                        </View>
                        
                    </View>

                </View>
            </View>

        );
    }
}