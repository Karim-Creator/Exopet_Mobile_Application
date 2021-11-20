import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Header, Left, Body, Right, Title, View,Text } from 'native-base';

export default class HeaderBar extends Component {
  
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header style={styles.headerStyle}>
        <StatusBar barStyle="light-content" backgroundColor="#F2515D"/>
          <Left style={{flex:1}}>
            <Text></Text>
          </Left>
          <Body style={{flex:1}}>
            <Title style={styles.titleStyle}>Exopet</Title>
          </Body>
          <Right style={{flex:1}}>
          </Right>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    containerStyle: {
      backgroundColor: '#FFFFFF',
    },

    headerStyle: {
      backgroundColor: '#FFFFFF',
      borderBottomColor: '#F0F0F0',
      borderBottomWidth: 2,
      elevation: 0
    },

    titleStyle: {
      color: '#000',
      fontSize: 40,
      alignSelf: 'center',
      fontFamily: 'Teko_semibold'
    },
  });