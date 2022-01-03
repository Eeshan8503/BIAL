import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const TripCard = ({navigation}) => {
    return (
       
        <TouchableOpacity onPress={()=>navigation.navigate('BagHistory')} style={{backgroundColor:'#5451D6',height:200,
              width:400,
              marginTop:50,
              justifyContent:'center',
              borderRadius:50}} >
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
        
            <Text style={
                {
                    color:'white',
                    fontSize:40,
                    textAlign:'left',
                    marginLeft:30
                }
            }>Trip 1</Text>
        <Text style={
                {
                    color:'white',
                    fontSize:20,
                    textAlign:'left',
                    marginLeft:30,
                }
            }>Date: 27/1/2022</Text>
             <Text style={
               style.text
            }>From:Bangalore</Text>
             <Text style={
               style.text
            }>To:Patna</Text>
          {/* </LinearGradient> */}
        </TouchableOpacity>
        
    )
}
const style=StyleSheet.create({
    text:{
                     color:'white',
                    fontSize:20,
                    textAlign:'left',
                    marginLeft:30
    }
})

export default TripCard;

