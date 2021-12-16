import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Luggage from './Luggage'
import Navbar from '../Navbar/Navbar'
export default function Dashboard(props) {
    return (
        <ScrollView>
        <View style={styles.conatiner}>
        <Text
        style={{
            margin:20,
            textAlign:'left',
            color:"#44369E",
            fontSize:25
        }}
        >Current Baggage Details :</Text>
        <View style={
            {
                display:'flex',
                flexDirection:'row',
            }
        }>
            <Image source={require('./../assets/pp.png')} style={{
                height:80,
                width:80,
                borderWidth:1,
                borderColor:"grey",
                borderRadius:40,
                marginLeft:20
            }} />
            <View style={{flexDirection:'column'}}>
            <Text  style={{
                marginLeft:20,
                marginTop:10,
                fontSize:20
            }}>Gajodar Singh</Text>
            <Text  style={{
                marginLeft:20,
                fontSize:15,
                color:'grey'
            }}>gajodarsingh@gmail.com</Text>
            </View>
        </View>
        <Text style={[styles.txt,{marginTop:20}]}>{`PNR: ${props.name || 'XYZHSY'}`}</Text>
        <Text style={styles.txt}>From: Patna</Text>
        <Text style={styles.txt}>To: Bangalore</Text>
        <Text style={{
            marginTop:30,
            marginLeft:20,
            fontSize:30,
            marginBottom:20
        }}>Luggage</Text>
        <Luggage/>
        <Luggage/>
        <Luggage/>
        <Luggage/>
        <Luggage/>
        
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        
    },
    txt:{
        marginLeft:20,
        fontSize:20
    }
})
