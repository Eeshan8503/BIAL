import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from './../Utils/api';
export default function Welcome({ navigation }) {
  useEffect(() => {
    const fetchMyApi = async () => {
      const res = await api.get('/user', { withCredentials: true });
      if (res.data.user.isTravelling) {
        navigation.navigate('Dashboard');
      }
    };
    fetchMyApi();
  }, []);
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#44369E', '#0B0733']}
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center'
      }}
    >
      <View style={styles.container}>
        <Image
          source={require('./../assets/pp.png')}
          style={{
            height: 150,
            width: 150,
            borderWidth: 5,
            borderColor: 'grey',
            borderRadius: 90
          }}
        />
        <View
          style={{
            marginTop: 20
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white'
            }}
          >
            Email: test@bial.app
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white'
            }}
          >
            Name: Test Singh
          </Text>
        </View>
        <TextInput
          placeholder="From"
          placeholderTextColor="white"
          style={{
            height: 40,
            width: '75%',
            borderWidth: 1,
            borderColor: 'white',
            margin: 15,
            padding: 10,
            color: 'white'
          }}
        />
        <TextInput
          placeholder="To"
          placeholderTextColor="white"
          style={{
            height: 40,
            width: '75%',
            borderWidth: 1,
            borderColor: 'white',
            margin: 15,
            padding: 10,
            color: 'white'
          }}
        />
        <TextInput
          placeholder="PNR"
          placeholderTextColor="white"
          style={{
            height: 40,
            width: '75%',
            borderWidth: 1,
            borderColor: 'white',
            margin: 15,
            padding: 10,
            color: 'white'
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: '5%',
            height: 80,
            width: 300,
            backgroundColor: '#5451D6',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: 25
          }}
          onPress={async () => {
            const res = await api.patch('user/startTrip', {
              to: 'Kolkata',
              form: 'Bengaluru',
              pnr: '9362403459298'
            });
            navigation.navigate('Dashboard');
          }}
        >
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 25
              }}
            >
              Start new Trip
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100
  }
});
