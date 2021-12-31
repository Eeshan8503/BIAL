import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler'
import TripCard from './TripCard'
const TripHistory = ({navigation}) => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#0B0733', '#44369E']}
            style={{
              height:'100%',
              width:'100%',
              alignItems: 'center',
              
            }}
          >

          
        <ScrollView contentContainerStyle={{alignItems: 'center' }}>
           <TripCard navigation={navigation}/>
           <TripCard navigation={navigation}/>
           <TripCard navigation={navigation}/>
           <TripCard navigation={navigation}/>
           <TripCard navigation={navigation}/>
           
        </ScrollView>
        </LinearGradient>
    )
}

export default TripHistory

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
})
