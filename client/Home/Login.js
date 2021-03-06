import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

// import { LinearGradient } from "react-native-svg";

const Login = ({ navigation }) => {
  return (
    <LinearGradient
            // Background Linear Gradient
            colors={['#44369E','#0B0733']}
            style={{
              height:'100%',
              width:'100%',
              alignItems: 'center',
            }}
          >
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
          marginTop: 120,
          color: "white",
        }}
      >
        Login
      </Text>
      <TextInput
        placeholder="username"
        value="test@bial.app"
        style={{
          height: 40,
          width: "75%",
          borderWidth: 1,
          borderColor: "white",
          marginTop: 20,
          padding: 10,
          color: "white",
        }}
      />
      <TextInput
        placeholder="username"
        value="password"
        style={{
          height: 40,
          width: "75%",
          borderWidth: 1,
          borderColor: "white",
          marginTop: 20,
          padding: 10,
          color: "white",
        }}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <View
          style={{
            marginTop: 50,
            borderRadius: 50,
            height: 60,
            width: 200,
            justifyContent: "center",
            backgroundColor: "#44369E",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: 20,
              color: "white",
            }}
          >
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // backgroundColor: "#5451D6",
    alignItems: "center",
  },
});
