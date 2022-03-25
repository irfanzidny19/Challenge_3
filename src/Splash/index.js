import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {Logo} from '../assets';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#18d6bd'}}>
        <StatusBar barStyle="dark-content" backgroundColor="#18d6bd" />
        <ImageBackground>
          <Image
            source={Logo}
            style={{width: 80, height: 80, marginLeft: 150, marginTop: 300}}
          />
        </ImageBackground>
        <Text
          style={{
            marginLeft: 140,
            fontSize: 18,
            marginTop: 10,
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Movie App
        </Text>
        <Text
          style={{
            marginLeft: 155,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 250,
          }}>
          Irfan Zidny
        </Text>
      </View>
    );
  }
}

export default Splash;
