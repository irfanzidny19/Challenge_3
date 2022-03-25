import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import DetailScreen from '../screens/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../Splash';
import Sharee from '../components/Share';
const Stack = createStackNavigator();

export default function Routes(props) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Sharee"
        component={Sharee}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
