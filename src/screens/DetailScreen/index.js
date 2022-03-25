import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ImageUrl} from '../../helpers/apiAccessToken';
import Sharee from '../../components/Share';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DetailScreen({route}) {
  const {id} = route.params;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getData(id) {
    try {
      await axios
        .get(`http://code.aldipee.com/api/v1/movies/${id}`)
        .then(res => {
          setData(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View style={{backgroundColor: '#18d6bd', flex: 1}}>
          <ScrollView>
            <View>
              <Image
                source={{uri: `${ImageUrl}${data.poster_path}`}}
                style={{
                  height: 300,
                  width: 400,
                }}
              />
            </View>
            <View
              style={{
                marginTop: -120,
                backgroundColor: '#369e90',
                flexDirection: 'row',
                marginLeft: 5,
                borderRadius: 12,
                height: 250,
                width: 380,
              }}>
              <Image
                source={{uri: `${ImageUrl}${data.poster_path}`}}
                style={{
                  height: 200,
                  width: 120,
                  marginLeft: 15,
                  marginTop: 30,
                }}
              />
              <View style={{marginLeft: 20, marginTop: 65}}>
                <View
                  style={{
                    height: 35,
                    width: 220,
                    backgroundColor: '#0b3a99',
                    borderRadius: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: 'white',
                      textAlign: 'center',
                      marginTop: 5,
                    }}>
                    {' '}
                    {data.title}
                  </Text>
                </View>
                <View
                  style={{
                    height: 45,
                    width: 220,
                    backgroundColor: '#0b3a99',
                    borderRadius: 10,
                    marginTop: 8,
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      marginTop: 8,
                      fontWeight: '900',
                      color: 'white',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    {' '}
                    {data.tagline}
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 5,
                    height: 28,
                    width: 100,
                    backgroundColor: '#0b3a99',
                    borderRadius: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 9,
                      fontSize: 15,
                      color: 'white',
                      fontWeight: '800',
                      marginTop: 4,
                      textAlign: 'center',
                    }}>
                    {data.vote_average} <Text>/10</Text>
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 5,
                    height: 30,
                    width: 150,
                    backgroundColor: '#0b3a99',
                    borderRadius: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      marginTop: 3,
                      fontSize: 15,
                      fontWeight: '900',
                      color: 'white',

                      textAlign: 'center',
                    }}>
                    {' '}
                    Status: {data.status}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Sharee />
            </View>
            <View style={{marginTop: 25}}>
              <Text
                style={{
                  textAlign: 'center',

                  fontSize: 23,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Genre
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',

                marginTop: 15,
                height: 45,
                width: 360,
                marginLeft: 17,
                backgroundColor: '#0b3a99',
                borderRadius: 12,
              }}>
              {data.genres?.map(item => {
                return (
                  <Text
                    style={{
                      marginLeft: 10,
                      marginTop: 10,
                      fontSize: 15,
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {' '}
                    {item.name}
                  </Text>
                );
              })}
            </View>

            <View style={{marginTop: 25}}>
              <Text
                style={{
                  textAlign: 'center',

                  fontSize: 23,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Sinopsis
              </Text>
            </View>

            <View
              style={{
                marginTop: 17,
                marginLeft: 15,
                backgroundColor: '#0b3a99',
                height: 150,
                width: 350,

                borderRadius: 12,
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: '600',
                    marginTop: 10,
                    textAlign: 'justify',
                  }}>
                  {data.overview}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  fontSize: 23,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Actor
              </Text>
              {data.credits.cast?.map(item => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',

                      backgroundColor: '#0b3a99',
                      marginTop: 20,
                      marginLeft: 15,
                      height: 120,
                      width: 370,
                      borderRadius: 12,
                    }}>
                    <Image
                      source={{uri: item.profile_path}}
                      style={{
                        width: 80,
                        height: 90,

                        marginTop: 15,
                        marginLeft: 15,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          marginLeft: 10,
                          marginTop: 20,
                          fontSize: 15,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {' '}
                        Name: {item.name}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 10,
                          marginTop: 15,
                          fontSize: 15,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {' '}
                        Playing as: {item.character}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={item => {
              return <Text>{item.id}</Text>;
            }}
          />
        </View>
      )}
    </>
  );
}
