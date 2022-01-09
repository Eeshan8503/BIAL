import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import Luggage from './Luggage';
import api from './../Utils/api';

export default function Dashboard({ route, navigation }) {
  const [luggage, setLuggage] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchMyApi = async () => {
      const res = await api.get('/user/getLuggage', { withCredentials: true });
      setLuggage(res.data.luggage);
    };
    fetchMyApi();
  }, [isFocused]);

  return (
    <View style={{height:'100%'}}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 3,
          height: 70,
          width: 70,
          backgroundColor: '#44369E',
          bottom: 15,
          right: 20,
          borderRadius: 40,
          alignItems: 'center',
          alignContent:'center',
          justifyContent: 'center'
        }}
        onPress={() => navigation.navigate('add luggage')}
      >
        <View>
          <Text
            style={{
              fontSize: 50,
              color: 'white'
            }}
          >
            +
          </Text>
        </View>
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.conatiner}>
          <Text
            style={{
              margin: 20,
              textAlign: 'left',
              color: '#44369E',
              fontSize: 25
            }}
          >
            Current Baggage Details :
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Image
              source={require('./../assets/pp.png')}
              style={{
                height: 80,
                width: 80,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 40,
                marginLeft: 20
              }}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  fontSize: 20
                }}
              >
                Test Singh
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 15,
                  color: 'grey'
                }}
              >
                test@bial.app
              </Text>
            </View>
          </View>
          <Text
            style={[styles.txt, { marginTop: 20 }]}
          >{`PNR: ${'9362403459298'}`}</Text>
          <Text style={styles.txt}>From: Bengaluru</Text>
          <Text style={styles.txt}>To: Kolkata</Text>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 20,
              fontSize: 30,
              marginBottom: 20
            }}
          >
            Luggage
          </Text>
          {luggage.length ? (
            luggage.map((item) => {
              return <Luggage details={item} key={item._id} />;
            })
          ) : (
            <Text style={styles.txt}>No Luggage</Text>
          )}
        </View>
        {luggage.length ? (
          <TouchableOpacity
            onPress={async () => {
              const res = await api.post('/user/endTrip');
            }}
          >
            <View
              style={{
                marginTop: 5,
                borderRadius: 50,
                height: 60,
                width: 200,
                marginLeft: 85,
                justifyContent: 'center',
                backgroundColor: '#44369E'
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: 20,
                  color: 'white'
                }}
              >
                End Trip
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginLeft: 20,
    fontSize: 20
  }
});
