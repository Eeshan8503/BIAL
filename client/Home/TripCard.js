import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TripCard = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5451D6',
        height: 150,
        width: 300,
        margin: 10,
        justifyContent: 'center',
        borderRadius: 10
      }}
    >
      {/* <LinearGradient
            // Background Linear Gradient
            colors={['#0B0733', '#44369E']}
            style={{
              height:200,
              width:300,
              marginTop:50,
              justifyContent:'center',
              borderRadius:50
            }}
          > */}

      <Text
        style={{
          color: 'white',
          fontSize: 25,
          textAlign: 'left',
          marginLeft: 30
        }}
      >
        Trip Details
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'left',
          marginLeft: 30
        }}
      >
        Date: 27/1/2022
      </Text>
      <Text style={style.text}>From:Bangalore</Text>
      <Text style={style.text}>To:Patna</Text>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 30
  }
});

export default TripCard;
