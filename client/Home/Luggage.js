import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Luggage = () => {
    return (
        <View style={styles.container}>
        <View style={{justifyContent:'center'}} >
            <Text style={{
                fontSize:20
            }}>Black Suitcase</Text>
            <Text style={{
                fontSize:20
            }}>Weight: 7kg</Text>
            <Text style={{
                fontSize:20
            }}>ID: 78bhawef872t37</Text>
        </View>
        <View style={{
            marginTop:5,
            height:80,
            width:80,
            justifyContent:'center',
            alignContent:'center',
            borderWidth:3,
            borderColor:'red',
            borderRadius:40
            }}>
            <Text style={{textAlign:'center'}}>REPORT</Text>
        </View>
        </View>
    )
}

export default Luggage

const styles = StyleSheet.create({
    container:{
        width:'85%',
        flexDirection:'row',
        height:120,
        marginLeft:20,
        borderWidth:3,
        borderColor:"#44369E",
        borderRadius:20,
        padding: 10,
        justifyContent:'space-between',
        marginBottom:20
    }
})
