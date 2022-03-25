import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import DetailScreen from '../DetailScreen';
import axios from 'axios';
import {ImageUrl} from '../../helpers/apiAccessToken';
import MovieDetailScreen from '../MovieDetailScreen/index.js';
import Sharee from '../../components/Share';

const Home = props => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getListLatest();
  }, []);

  const getListLatest = async () => {
    try {
      const results = await axios.get(`http://code.aldipee.com/api/v1/movies`);
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
          marginTop: 15,
          backgroundColor: '#70e6d6',
          flexDirection: 'row',
          marginLeft: 5,
          borderRadius: 12,
          height: 230,
          width: 380,
        }}>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{
            height: 190,
            width: 130,
            margin: 5,
            marginTop: 30,
            borderRadius: 14,
            marginLeft: 15,
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 15,
            paddingRight: 12,
          }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DetailScreen', {id: item.id})
            }>
            <View
              style={{
                height: 40,
                width: 190,
                backgroundColor: '#0b3a99',
                borderRadius: 12,
                marginTop: 35,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: 12,
                  marginTop: 8,
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 5,
              height: 40,
              width: 200,
              backgroundColor: '#0b3a99',
              borderRadius: 12,
            }}>
            <Text
              style={{
                fontSize: 14,

                textAlign: 'center',
                marginTop: 5,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Release Date : {item.release_date}
            </Text>
          </View>

          <View
            style={{
              marginTop: 5,
              height: 35,
              width: 126,
              backgroundColor: '#0b3a99',
              borderRadius: 12,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: 'blue',
                textAlign: 'center',
                marginTop: 5,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Rate : {item.vote_average} /10
              <FontAwesome5 name="star" size={15}></FontAwesome5>
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DetailScreen', {id: item.id})
            }>
            <View
              style={{
                height: 45,
                width: 100,
                backgroundColor: '#40434a',
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 13,
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Show More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#18d6bd'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#18d6bd" />
      <MovieDetailScreen />
      <View style={{marginTop: 40}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 25,
          }}>
          Latest Upload
        </Text>

        <FlatList
          data={listMovie}
          keyExtractor={(item, index) => index}
          renderItem={CardMovie}
        />
      </View>
    </View>
  );
};

export default Home;
