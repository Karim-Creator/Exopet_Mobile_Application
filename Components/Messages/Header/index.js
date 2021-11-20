import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Left, Body, Right, Button, Icon, Title, Header } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class MessagesHeader extends Component {
  render() {

    return (
      
      <View style={{height: 80,flexDirection:'row', backgroundColor:'#FFF'}}>
        <ScrollView>
        <Header style={styles.headerStyles}>
        <StatusBar barStyle="light-content" backgroundColor="#F2515D" />
          <Left style={{flex: 1,}}>
            <Button transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='chevron-back' style={{fontSize: 30, color:'#000'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyles}>Messages</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    titleStyles: {
        alignSelf:'center',
        fontSize: 30,
        fontFamily: 'Teko_semibold',
        color: '#000'
    },
    headerStyles:{
      backgroundColor:'#fff',
      borderBottomColor: '#F0F0F0',
      borderBottomWidth: 2,
    }
})