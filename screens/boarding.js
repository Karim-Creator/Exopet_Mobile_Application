import { Container } from 'native-base';
import React from 'react';
import { View, StyleSheet, Image, StatusBar, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnBoarding({ navigation }) {

          return (
              <Container>
                  <StatusBar barStyle="light-content" backgroundColor="#F2515D"/>

                  <View style={{width: '100%', justifyContent:'center', alignItems:'center', top: 20}}>
                  <Text style={{fontSize: 40,fontFamily: 'Teko_regular', color: '#F2515D'}}>Exopet</Text>
                  </View>


                  <View style={{width: '100%', top: 40, paddingLeft: 10}}>
                  <View
                    style={{
                        borderBottomColor: '#F2515D',
                        borderBottomWidth: 5,
                        width: 60,
                        borderRadius: 10,
                        marginBottom: 10,
                    }}
                    />
                  <Text style={{fontSize: 50,fontFamily: 'Teko_regular', color: '#F2515D'}}>OnBoarding</Text>
                  </View>

                <View style={{position: 'absolute',bottom: 0,right: 0, left: 0, top: 30}}>

                  <Onboarding
                  pages={[
                      {
                      backgroundColor: 'transparent',
                      image: <Image source={require('../assets/Images/Boarding/one.png')} style={{height: 250,width: '100%', resizeMode:'contain'}}/>,
                      title: 'Welcome',
                      subtitle: 'Welcome to our pet adopting app, sign in/up and start swiping left and right!',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      },
                      {
                      backgroundColor: 'transparent',
                      image: <Image source={require('../assets/Images/Boarding/two.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Explore',
                      subtitle: 'we provide our users with various pets to be adopted near you.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      },
                      {
                      backgroundColor: 'transparent',
                      image: <Image source={require('../assets/Images/Boarding/three.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Swipe',
                      subtitle: 'It is simple, swipe right if you like a pet and swipe left if you do not.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      },
                      {
                      backgroundColor: 'transparent',
                      image: <Image source={require('../assets/Images/Boarding/four.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Adopt',
                      subtitle: 'Message The pet owner, whether it is a user, shelter or a rescue group and adopt your new friend.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      },
                  ]}
                  bottomBarColor={'#F2515D'}
                  skipToPage={3}
                  onDone={() => navigation.navigate('Home')}
                  />
                </View>
                  
              </Container>
          );
        }

const styles = StyleSheet.create({
    titleStyles:{
        color: '#F2515D', 
        fontFamily:'Teko_regular',
        fontSize: 35
    },

    subTitleStyles:{
        color: '#000', 
        fontFamily:'Teko_regular',
        textTransform:'capitalize', 
        fontSize: 23, 
        paddingLeft: 10, 
        paddingRight: 10
    },
})
