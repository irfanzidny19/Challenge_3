import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import DetailScreen from '../DetailScreen';
import axios from 'axios';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessToken';

import Home from '../Home';

const MovieDetailScreen = props => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    Rekomendasi();
  }, []);

  const Rekomendasi = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/now_playing`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      console.log(results);
      setListMovie(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const CardMovie = ({item}) => {
    return (
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          marginLeft: 20,
          paddingRight: 12,
        }}>
        <TouchableOpacity>
          <Image
            source={{uri: `${ImageUrl}${item.poster_path}`}}
            style={{
              height: 240,
              width: 160,
              borderRadius: 14,
              marginTop: 30,
              marginLeft: 27,
              alignSelf: 'center',
            }}
          />
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
                color: 'black',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 15,

                textAlign: 'center',
                marginTop: 5,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {item.vote_average} /10
              <FontAwesome5 name="star" size={13}></FontAwesome5>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginLeft: 15, marginTop: 30}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 7,
        }}>
        Now Playing
      </Text>
      <View
        style={{
          marginTop: 10,
          height: 355,
          backgroundColor: '#70e6d6',
          borderRadius: 13,
        }}>
        <FlatList
          horizontal
          data={listMovie}
          keyExtractor={(item, index) => index}
          renderItem={CardMovie}
        />
      </View>
    </View>
  );
};

export default MovieDetailScreen;
