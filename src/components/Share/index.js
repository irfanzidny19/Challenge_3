import React from 'react';
import {Share, View, Button, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

const Sharee = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Challenge Chapter 3 MovieApp',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View
      style={{
        height: 40,
        width: 70,
        marginTop: 50,
        marginLeft: 15,
        flexDirection: 'row',
      }}>
      <Button onPress={onShare} title="Share"></Button>
      <TouchableOpacity>
        <View
          style={{
            marginLeft: 15,
            height: 40,
            width: 40,
            backgroundColor: 'white',
            borderRadius: 30,
          }}>
          <View style={{marginLeft: 10, marginTop: 10}}>
            <FontAwesome5
              name="heart"
              backgroundColor="#3b5998"
              size={20}></FontAwesome5>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Sharee;
