import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

import Home from './screens/Home/index.js';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/index.js';
const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
