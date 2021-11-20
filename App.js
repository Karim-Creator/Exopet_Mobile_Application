import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import 'firebase/firestore';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import WelcomeScreen from './screens/welcome';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import SplashScreen from './screens/splash';
import OnBoarding from './screens/boarding';
import MessagesScreen from './screens/messages';
import ProfileScreen from './screens/profile';

//Create Stack NAvigator
const Stack = createStackNavigator();

//Firebase Api Key
//Initialize/Link To Firebase Server
const firebaseConfig = {
  apiKey: "AIzaSyBM_uz2D54cqXuzBhqyDAIjg4QuCR3Vtvs",
  authDomain: "exopet-b6a8b.firebaseapp.com",
  projectId: "exopet-b6a8b",
  storageBucket: "exopet-b6a8b.appspot.com",
  messagingSenderId: "208802043741",
  appId: "1:208802043741:web:1f5373d7965c1bddfc3ab4"
};
//Stops The App From Initilizing Everytime It Is Reloaded
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      //Set Fonts To False
      fontLoaded: true,
      //Set The Timer To False
      timePassed: false,
      //Set Logged In To False
      isLoggedIn: false,

    };
  }

  async componentDidMount() {
    //Set A Timer For SplashScreen
    setTimeout(() => {
      this.setTimePassed();
    }, 2000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  //Use The "Unsafe" ComponentWillMount To Add Fonts && "Unsafe" To Avoid a Warning
  async UNSAFE_componentWillMount() {
    //Load Fonts Using LoadAsync
    await Font.loadAsync({
      "Teko_medium": require('./assets/Fonts/Teko-Medium.ttf'),
      "Teko_bold": require('./assets/Fonts/Teko-Bold.ttf'),
      "Teko_light": require('./assets/Fonts/Teko-Light.ttf'),
      "Teko_regular": require('./assets/Fonts/Teko-Regular.ttf'),
      "Teko_semibold": require('./assets/Fonts/Teko-SemiBold.ttf'),
      "Roboto_medium": require('./assets/Fonts/Roboto-Medium.ttf'),
    });
    this.setState({ fontLoaded: false });

    //Check If The User Is Logged In
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true })
      } else {
        this.setState({ isLoggedIn: false })
      }
    })
  }

  render() {

    if (!this.state.timePassed) {
      return (
        <SplashScreen />
      );
    }

    else {
    return (
      <NavigationContainer>
        { this.state.isLoggedIn ?
            (
              <Stack.Navigator
              //Remove The Flickering White Background When Switching Screens
              detachInactiveScreens={false} screenOptions={{ animationEnabled: false }}
              //Hide The Header
              headerMode={false}
              >
                <Stack.Screen name="Boarding" component={OnBoarding} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Messages" component={MessagesScreen} />
              </Stack.Navigator>
            )
            // If The User iS Not Logged In Return These Screens
            :
            (
              <Stack.Navigator
              //Remove The Flickering White Background When Switching Screens
              detachInactiveScreens={false} screenOptions={{ animationEnabled: false }}
              //Hide The Header
              headerMode={false}
              >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
              </Stack.Navigator>
            )
        }
      </NavigationContainer>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
