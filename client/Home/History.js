import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Luggage from './Luggage'
import api from './../Utils/api';
const History = () => {
    const response={
        "name":"eeshan",
        "email":"abcdfdsdsndj@gmail.com",
        "password":"12345678",
        "confirmPassword":"12345678"
    }
    // async function a(){
    //     const t= await api.post('/user/signup',response);
    //     console.log(t.data);
    // }
    // a();
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text
            style={{
                color:'#44369E',
                textAlign:'center',
                fontSize:30,
                marginBottom:40,
                marginTop:20
            }}
            >Baggage History:</Text>
            <Luggage/>
            <Luggage/>
            <Luggage/>
            <Luggage/>
            <Luggage/>
            <Luggage/>
        </View>
        </ScrollView>
    )
}

export default History

const styles = StyleSheet.create({
    
})
