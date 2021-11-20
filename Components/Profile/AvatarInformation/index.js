import React, { Component } from 'react';
import { Text, View, Icon } from 'native-base';

export default class AvatarInformation extends Component {

    render() {

        return (

            <View style={{marginBottom: 20, zIndex: 1}}>

                <View style={{ flexDirection: 'column',  paddingLeft: 15}}>

                    <View style={{ width: 360, height: 100, borderRadius: 5, alignItems:'center', justifyContent:'center',elevation: 5, backgroundColor:'#fff' }}>

                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Icon name="globe-outline" style={{backgroundColor:'#FFE8EE', color: '#DB5555', borderRadius: 30, fontSize: 25, padding: 10}}/>

                            <View style={{justifyContent:'space-between', flexDirection:'row', width:'80%', alignItems:'center'}}>

                                <View style={{marginLeft: 20}}>
                                    <Text style={{fontSize: 25, fontFamily: 'Teko_regular'}}>
                                        Language
                                    </Text>
                                    <Text style={{fontSize: 20, fontFamily: 'Teko_regular', color:'#C0C0C0'}}>
                                        English
                                    </Text>
                                </View>

                                <Icon name="chevron-forward"/>
                            </View>

                        </View>

                    </View>

                    
                </View>
            </View>

        );
    }
}