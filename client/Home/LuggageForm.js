import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import api from './../Utils/api';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

const TripForm = ({ navigation }) => {
  const [form, setForm] = useState({ description: '', color: '', weight: '' });
  useEffect(() => {
    const fetchMyApi = async () => {
      //const res = await api.post('/user/addLuggage', {} ,{ withCredentials: true });
    };
    fetchMyApi();
  }, []);
  async function takeAndUploadPhotoAsync() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1]
    });

    if (result.cancelled) {
      return;
    }
    let localUri = result.uri;
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    /*let formData = new FormData();    
    formData.append('photo', { uri: localUri, name: filename, type });
    return await fetch(YOUR_SERVER_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'multipart/form-data'
      }
    });*/
  }
  return (
    <LinearGradient
      colors={['#0B0733', '#44369E']}
      style={{ height: '100%', width: '100%' }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ width: '100%', marginLeft: 100 }}>
          <Text
            style={{
              textAlign: 'left',
              color: 'white',
              fontSize: 25,
              marginTop: 20,
              marginBottom: 5
            }}
          >
            Description
          </Text>
          <TextInput
            clearButtonMode="always"
            placeholder=""
            placeholderTextColor="white"
            style={{
              height: 40,
              width: '75%',
              borderWidth: 1,
              borderColor: 'white',
              padding: 10,
              color: 'white'
            }}
            onChangeText={(description) => {
              setForm({ ...form, description });
            }}
          />
          <Text
            style={{
              textAlign: 'left',
              color: 'white',
              fontSize: 25,
              marginTop: 20,
              marginBottom: 5
            }}
          >
            Colour
          </Text>
          <TextInput
            clearButtonMode="always"
            placeholder=""
            placeholderTextColor="white"
            style={{
              height: 40,
              width: '75%',
              borderWidth: 1,
              borderColor: 'white',

              padding: 10,
              color: 'white'
            }}
            onChangeText={(color) => {
              setForm({ ...form, color });
            }}
          />
          <Text
            style={{
              textAlign: 'left',
              color: 'white',
              fontSize: 25,
              marginTop: 20,
              marginBottom: 5
            }}
          >
            Weight
          </Text>
          <TextInput
            clearButtonMode="always"
            placeholder=""
            placeholderTextColor="white"
            style={{
              height: 40,
              width: '75%',
              borderWidth: 1,
              borderColor: 'white',
              padding: 10,
              color: 'white'
            }}
            onChangeText={(weight) => {
              setForm({ ...form, weight });
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: '10%',
            height: 50,
            width: 300,
            backgroundColor: '#5451D6',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: 10
          }}
          //   onPress={()=>navigation.navigate('Dashboard')}
          onPress={() => takeAndUploadPhotoAsync()}
        >
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 25
              }}
            >
              Upload Photo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: '10%',
            height: 70,
            width: 300,
            backgroundColor: '#5451D6',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: 25
          }}
          onPress={async () => {
            await api.post('/user/addLuggage', form, {
              withCredentials: true
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
              SUBMIT
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default TripForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  }
});
