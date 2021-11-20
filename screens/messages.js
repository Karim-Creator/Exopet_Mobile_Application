import React, { Component } from 'react';
import { Container } from 'native-base'
import HeaderBar from '../Components/Header';
import MessagesFooterBar from '../Components/Messages/Footer';
import MessagesLike from '../Components/Messages/Likes';
import MessagesMsg from '../Components/Messages/Msg';
import { ScrollView } from 'react-native';


export default class MessagesScreen extends Component {
    render(){
            return (
            <Container>
                <HeaderBar navigation={this.props.navigation}/> 

                <MessagesLike />
                <ScrollView>
                <MessagesMsg />
                </ScrollView>

                <MessagesFooterBar navigation={this.props.navigation}/>
            </Container>
            )
    }
}