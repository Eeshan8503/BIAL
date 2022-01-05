import React from 'react'
import { StyleSheet, View,TextInput,Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const TripForm = ({navigation}) => {
    return (
        <LinearGradient
        colors={['#0B0733', '#44369E']}
        style={{height:'100%',width:'100%'}}
        >

        <ScrollView contentContainerStyle={styles.container}>
        <Image
            source={require("./../assets/pp.png")}
            style={{
              height: 180,
              width: 180,
              borderWidth: 5,
              borderColor: "grey",
              borderRadius: 90,
              marginLeft: 20,
            }}
          />
        <View style={{width:'100%',marginLeft:70}}>
            <Text
            style={{
                textAlign:'left',
                color:'white',
                fontSize:30,
                marginTop:20
            }}
            >From:</Text>
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
            >To:</Text>
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
            >PNR:</Text>
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
          onPress={()=>navigation.navigate('Dashboard')}
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
