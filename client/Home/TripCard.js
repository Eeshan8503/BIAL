import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const TripCard = ({navigation}) => {
    return (
       
        <TouchableOpacity onPress={()=>navigation.navigate('BagHistory')} >
        <LinearGradient
            // Background Linear Gradient
            colors={['#0B0733', '#44369E']}
            style={{
              height:275,
              width:350,
              marginTop:50,
              justifyContent:'center',
              borderRadius:50
            }}
          >
        
            <Text style={
                {
                    color:'white',
                    fontSize:50,
                    textAlign:'left',
                    marginLeft:30
                }
            }>Trip 1</Text>
        <Text style={
                {
                    color:'white',
                    fontSize:30,
                    textAlign:'left',
                    marginLeft:30,
                }
            }>Date: 27/1/2022</Text>
             <Text style={
                {
                    color:'white',
                    fontSize:30,
                    textAlign:'left',
                    marginLeft:30
                }
            }>From:Bangalore</Text>
             <Text style={
                {
                    color:'white',
                    fontSize:30,
                    textAlign:'left',
                    marginLeft:30
                }
            }>To:Patna</Text>
          </LinearGradient>
        </TouchableOpacity>
        
    )
}

export default TripCard;

