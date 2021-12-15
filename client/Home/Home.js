import React from 'react'
import { StyleSheet, Text, View,Image,SafeAreaView, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { createStackNavigator } from "react-navigation-stack";
import Login from './Login';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
          <Image source={require('./../assets/rock.png')}/>
          <View
            style={{
              width:'100%',
              flex:1,
              alignItems: 'center',
              justifyContent: 'center',
             
          }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={['#0B0733', '#44369E']}
            style={{
              height:'100%',
              width:'100%',
              alignItems: 'center',
              
            }}
          >
    
          <Text
          style={{
            color:"white",
            fontSize:60,
            marginTop:55
          }}
          >
            BIAL Genie
          </Text>
          <Text
          style={{
            color:"#E5E5E5",
            fontSize:20,
            textAlign:"center"
          }}
          >Track luggage. Find lost luggage. Report unknown luggage</Text>
          <TouchableOpacity style={{
            margin:90,
            height:80,
            width: 300,
            backgroundColor:'#5451D6',
            justifyContent:"center",
            alignContent:'center',
            borderRadius:25
          }}
          // onPress={()=>this.props.navigation.navigate('Login')}
          >
          <View>
            <Text
            style={{
              textAlign:'center',
              color:'white',
              fontSize:25
            }}
            >Get Started</Text>
            <Button title='sasa' 
           onPress={()=>navigation.navigate('Login')}  
            ></Button>
          </View>
          </TouchableOpacity>
          </LinearGradient>
          </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height:1000,
        marginTop:'15%'
      },
    });
    

export default Home
