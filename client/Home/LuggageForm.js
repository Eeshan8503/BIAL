import React from 'react'
import { StyleSheet, View,TextInput,Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Constants } from 'expo';
import * as ImagePicker from 'expo-image-picker';
const TripForm = ({navigation}) => {
    async function takeAndUploadPhotoAsync() {
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
      
        if (result.cancelled) {
          return;
        }
        let localUri = result.uri;
        let filename = localUri.split('/').pop();
      
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
      
        // let formData = new FormData();
        // formData.append('photo', { uri: localUri, name: filename, type });
      
        // return await fetch(YOUR_SERVER_URL, {
        //   method: 'POST',
        //   body: formData,
        //   headers: {
        //     'content-type': 'multipart/form-data',
        //   },
        // });
      }
    return (
        <LinearGradient
        colors={['#0B0733', '#44369E']}
        style={{height:'100%',width:'100%'}}
        >

        <ScrollView contentContainerStyle={styles.container}>
        <View style={{width:'100%',marginLeft:70}}>
            <Text
            style={{
                textAlign:'left',
                color:'white',
                fontSize:30,
                marginTop:20
            }}
            >Company of luggage</Text>
            <TextInput
            placeholder="From"
            placeholderTextColor="white" 
            style={{
            height: 40,
            width: "75%",
            borderWidth: 1,
             borderColor: "white",
             padding: 10,
             color: "white",
        }}
      />
       <Text
            style={{
                textAlign:'left',
                color:'white',
                fontSize:30,
                marginTop:20
            }}
            >color of bag</Text>
            <TextInput
            placeholder="From"
            placeholderTextColor="white" 
            style={{
            height: 40,
            width: "75%",
            borderWidth: 1,
             borderColor: "white",
             
             padding: 10,
             color: "white",
        }}
      />
        </View>
        <TouchableOpacity style={{
            marginTop:'10%',
            height:80,
            width: 300,
            backgroundColor:'#5451D6',
            justifyContent:"center",
            alignContent:'center',
            borderRadius:25
          }}
        //   onPress={()=>navigation.navigate('Dashboard')}
        onPress={()=>takeAndUploadPhotoAsync()}
          >
          <View>
            <Text
            style={{
              textAlign:'center',
              color:'white',
              fontSize:25
            }}
            >Upload Photo</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginTop:'10%',
            height:80,
            width: 300,
            backgroundColor:'#5451D6',
            justifyContent:"center",
            alignContent:'center',
            borderRadius:25
          }}
          onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Dashboard', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
         
          >
          <View>
            <Text
            style={{
              textAlign:'center',
              color:'white',
              fontSize:25
            }}
            >Submit</Text>
          </View>
          </TouchableOpacity>
        </ScrollView>
        </LinearGradient>
    )
}

export default TripForm

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    }
})
