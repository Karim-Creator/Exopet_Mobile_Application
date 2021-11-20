import React, { useRef, useEffect } from 'react';
import { Text, View, Dimensions, ImageBackground, Animated, PanResponder, Image } from 'react-native';
import { Icon } from 'native-base'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Users = [
  { id: "1", name: 'Rox',age: '15',distance: '20', uri: require('../../assets/Images/HomeDeck/dawg.jpg')},
  { id: "4", name: 'Zoe',age: '10', distance: '11', uri: require('../../assets/Images/HomeDeck/cato.jpg')},
  { id: "2", name: 'Lucy',age: '20', distance: '34', uri: require('../../assets/Images/HomeDeck/doge.jpg')},
  { id: "3", name: 'Cooper',age: '13', distance: '60', uri: require('../../assets/Images/HomeDeck/dog.jpg')},
  { id: "5", name: 'Happy',age: '5', distance: '7', uri: require('../../assets/Images/HomeDeck/cat.jpg')},
]

const FadeInView = (props) => {

  // Fade Animation Start
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
      Animated.timing(
          fadeAnim,
          {
              toValue: 1,
              duration: 1200,
              useNativeDriver: true,
          }
      ).start();
  }, [fadeAnim])

  return (
      <Animated.View                 // Special animatable View
          style={{
              ...props.style,
              opacity: fadeAnim,         // Bind opacity to animated value
          }}
      >
          {props.children}
      </Animated.View>
  );
  // Fade Animation End
}


export default class HomeDeck extends React.Component{

  constructor(){
    super()
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      visible: false
    }
    
    


    this.rotate = this.position.x.interpolate({
      inputRange:[-SCREEN_HEIGHT/2,0,SCREEN_WIDTH/2],
      outputRange:['-10deg','0deg','10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
    ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_HEIGHT/2,0,SCREEN_WIDTH/2],
      outputRange:[0, 0, 1],
      extrapolate: 'clamp'
    })

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_HEIGHT/2,0,SCREEN_WIDTH/2],
      outputRange:[1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_HEIGHT/2,0,SCREEN_WIDTH/2],
      outputRange:[1, 0, 1],
      extrapolate: 'clamp'
    })

    this.nextCardScale = this.position.x.interpolate({
      inputRange:[-SCREEN_HEIGHT/2,0,SCREEN_WIDTH/2],
      outputRange:[1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }

  _toggleShow = () => {
    this.setState({showComponmentB: !this.state.showComponmentB})
  }

  UNSAFE_componentWillMount(){
    //Set The state To show/Hide
    this.setState({ visible: !this.state.visible })
    
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt,gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },

      onPanResponderRelease: (evt,gestureState) => {

        if(gestureState.dx > 120)
        {
          Animated.spring(this.position, {
            useNativeDriver: true,
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1}, () =>
            {
              this.position.setValue({ x: 0, y: 0})
            })
          })
        }
        else if(gestureState.dx < -120)
        {
          Animated.spring(this.position, {
            useNativeDriver: true,
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1}, () =>
            {
              this.position.setValue({ x: 0, y: 0})
            })
          })
        }
        else{
          Animated.spring(this.position, {
            useNativeDriver: true,
            toValue: {x:0, y: 0},
            friction: 4
          }).start()
        }

      }
    })
  }

  renderUsers = () => {
    return Users.map((item, i) => {

      if( i < this.state.currentIndex || i - this.state.currentIndex > 1)
      {
        return null
      }
      else if ( i == this.state.currentIndex)
      {
        return(
          <Animated.View 
          {...this.PanResponder.panHandlers}
          key={item.id}
          style={[this.rotateAndTranslate,{ height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

            <Animated.View style={{opacity: this.likeOpacity,transform: [{ rotate: '-30deg'}],position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
              <Text style={{borderWidth: 1, borderColor: 'green', color:'green', fontSize: 32, fontWeight: '800', padding: 10}}>LIKE</Text>
            </Animated.View>

            <Animated.View style={{opacity: this.dislikeOpacity,transform: [{ rotate: '30deg'}],position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
              <Text style={{borderWidth: 1, borderColor: 'red', color:'red', fontSize: 32, fontWeight: '800', padding: 10}}>NOPE</Text>
            </Animated.View>

            {/* Background Image */}
            <ImageBackground 
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
            source={item.uri}
            imageStyle={{ borderRadius: 20}}
            >
            {/* Info Icon */}
            <View style={{top: 5, left: 5}}>
              {this.state.showComponmentB && 

              <FadeInView>
                            
              <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)', position:'absolute', width:365, height: 630, borderRadius: 20}}>
                <View style={{ top: 280,height: 50, flexDirection: 'row', justifyContent:'space-between'}}>
                  <View>
                    <Image source={require('../../assets/Images/HomeDeck/swipe-left.png')} style={{height: 80, width: 80}}/>
                    <Text style={{color:'gold', paddingLeft: 10,fontFamily:'Teko_medium', fontSize: 20,textAlign: 'center'}}>Swipe Left</Text>
                  </View>
                  
                  <View>
                    <Image source={require('../../assets/Images/HomeDeck/swipe-right.png')} style={{height: 80, width: 80}}/>
                    <Text style={{color:'gold', paddingRight: 10,fontFamily:'Teko_medium', fontSize: 20,textAlign: 'center'}}>Swipe Right</Text>
                  </View>
                </View>

                <View style={{top: 400, flexDirection:'row', justifyContent:'space-between'}}>

                  <View style={{justifyContent:'center', alignItems:'center', left: 20 }}>
                    <Text style={{color:'gold', fontSize: 25, marginBottom: 10,textAlign:'center', fontFamily:'Teko_medium'}}>Age</Text>

                  <View
                    style={{
                      borderLeftColor: 'gold',
                      borderLeftWidth: 4,
                      height: 60,
                    }}
                  />

                  </View>

                  <View style={{justifyContent:'center', alignItems:'center',marginLeft: 40,bottom: 40  }}>
                    <Text style={{color:'gold', fontSize: 25, marginBottom: 10, textAlign:'center',fontFamily:'Teko_medium'}}>Name</Text>

                  <View
                    style={{
                      borderLeftColor: 'gold',
                      borderLeftWidth: 4,
                      height: 60,
                    }}
                  />

                  </View>
                  
                  <View style={{justifyContent:'center', alignItems:'center', marginRight: 20 }}>
                    <Text style={{color:'gold', fontSize: 25, marginBottom: 10, textAlign:'center', fontFamily:'Teko_medium'}}>Distance</Text>

                  <View
                    style={{
                      borderLeftColor: 'gold',
                      borderLeftWidth: 4,
                      height: 60,
                    }}
                  />

                  </View>
                  
                </View>
              </View>
              </FadeInView>

              

              }
              <Icon name='information-circle-outline' style={{color:'gold', fontSize: 40}}
              //Show/Hide View
              onPress={this._toggleShow}
              />
            </View>
            <View style={{position:'absolute', bottom: 10, flexDirection:'row', paddingLeft: 20, paddingRight: 20, justifyContent:'space-between', width:'100%'}}>
        
            {/* Pet Information */}
            <Text style={{color:'#FFFFFF', fontSize: 40,fontFamily: 'Teko_regular' }}>{item.age} m</Text>
            <Text style={{color:'#FFFFFF', fontSize: 50,fontFamily: 'Teko_medium', bottom: 50, letterSpacing: 2}}>{item.name}</Text>
            <Text style={{color:'#FFFFFF', fontSize: 40,fontFamily: 'Teko_regular' }}>{item.distance} km</Text>
            </View>
            </ImageBackground>
          </Animated.View>
        )
      }
      else
      {
        return(

        <Animated.View 
          key={item.id}
          style={[{ 
            opacity: this.nextCardOpacity,
            transform: [{scale: this.nextCardScale}],
            height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
            <ImageBackground 
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover'}}
            source={item.uri}
            imageStyle={{ borderRadius: 20}}
            >
            </ImageBackground>
          </Animated.View>
        )

      }

    }).reverse()
  }

  render()
  {
    return(
      <View style={{flex: 1}}>
        {this.renderUsers()}
      </View>
    )
  }
}