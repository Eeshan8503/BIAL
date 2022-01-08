import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Luggage from "./Luggage";
export default function Dashboard({route,navigation}) {
  console.log(route.params)
  return (

    <View>
    <TouchableOpacity style={{
      position:'absolute',
      zIndex:3,
      height:100,
      width:100,
      backgroundColor:'#44369E',
      bottom:10,
      right:20,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center'
    }} onPress={()=>navigation.navigate('add luggage')}>
    <View >
      <Text style={{fontSize:50,color:'white'}}>+</Text>
    </View>
    </TouchableOpacity>
    <ScrollView>
      <View style={styles.conatiner}>
        <Text
          style={{
            margin: 20,
            textAlign: "left",
            color: "#44369E",
            fontSize: 25,
          }}
        >
          Current Baggage Details :
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./../assets/pp.png")}
            style={{
              height: 80,
              width: 80,
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 40,
              marginLeft: 20,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 10,
                fontSize: 20,
              }}
            >
              Test Singh
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 15,
                color: "grey",
              }}
            >
              test@bial.app
            </Text>
          </View>
        </View>
        <Text style={[styles.txt, { marginTop: 20 }]}>{`PNR: ${
           "XYZHSY"
        }`}</Text>
        <Text style={styles.txt}>From: Patna</Text>
        <Text style={styles.txt}>To: Bangalore</Text>
        <Text
          style={{
            marginTop: 30,
            marginLeft: 20,
            fontSize: 30,
            marginBottom: 20,
          }}
        >
          Luggage
        </Text>
        <Luggage />
        <Luggage />
        <Luggage />
        <Luggage />
        <Luggage />
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
  txt: {
    marginLeft: 20,
    fontSize: 20,
  },
});
