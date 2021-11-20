import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Footer, FooterTab, Button, Icon, Text } from 'native-base';


export default class MessagesFooterBar extends Component {
    

    render() {
        return (
            <View style={styles.viewStyle}>
                <Footer style={{ backgroundColor: '#F2515D' }}>
                    <FooterTab style={{ backgroundColor: '#FFFFFF' }}>
                        <Button style={styles.footerButtonStyle}
                        onPress={() => { this.props.navigation.navigate("Messages");}}
                        style={styles.buttonActive}
                            // onPress={() => { this.props.navigation.navigate("Home"); }}
                        >
                            <Icon name="chatbubbles-outline"
                            style={styles.iconActive}
                            />
                            <Text style={{ textTransform: 'capitalize', fontFamily:'Teko_regular', fontSize: 13 }}
                            style={styles.textActive}
                            >Messages</Text>
                        </Button>
                        <Button
                        onPress={() => {this.props.navigation.navigate("Home");}}
                        style={styles.buttonInactive }
                            // onPress={() => { this.props.navigation.navigate("Wish"); }}
                        >
                            <Icon name="paw-outline"
                            style={ styles.iconInactive }
                            />
                            <Text style={{textTransform: 'capitalize', fontFamily:'Teko_regular', fontSize: 13 }}
                            style={styles.textInactive }
                            >Discover</Text>
                        </Button>
                        <Button
                        onPress={() => {this.props.navigation.navigate("Profile");}}
                        style={styles.buttonInactive }
                            // onPress={() => { this.props.navigation.navigate("Setting"); }}
                        >
                            <Icon name="person-outline"
                            style={styles.iconInactive }
                            />
                            <Text style={{  textTransform: 'capitalize', fontFamily:'Teko_regular', fontSize: 13 }}
                            style={styles.textInactive }
                            >Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    viewStyle: {
        height: 50,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    },


    footerButtonStyle: {
        backgroundColor: '#FFFFFF',
        color: '#F2515D',
    },

    buttonActive:{
        color: '#F2515D',
        backgroundColor:'#FFF',
        borderTopColor: '#F2515D',
        borderTopWidth: 2,
    },

    buttonInactive:{
        color: '#808080',
    },
    iconActive:{
        color: '#F2515D',
        backgroundColor:'#FFF',
    },

    iconInactive:{
        color: '#808080',
    },
    textActive:{
        color: '#F2515D',
        fontFamily: 'Teko_regular',
        fontSize: 14
    },

    textInactive:{
        color: '#808080',
        fontFamily: 'Teko_regular',
        fontSize: 14
    },
});
