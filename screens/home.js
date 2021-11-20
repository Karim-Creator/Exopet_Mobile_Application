import React, { Component }  from 'react';
import FooterBar from '../Components/Footer';
import { Container } from 'native-base';
import HeaderBar from '../Components/Header';
import HomeDeck from '../Components/HomeDeck';

export default class HomeScreen extends Component {
  render(){
  return (
    <Container>
      <HeaderBar navigation={this.props.navigation}/>
      <HomeDeck />
      <FooterBar navigation={this.props.navigation}/>
    </Container>
  );
  }
}