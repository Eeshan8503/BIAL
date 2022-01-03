import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Def from "./../TEST/Def";
import Dashboard from "../Home/Dashboard";
import History from "../Home/History";
import Scanner from "./../Home/Scanner";
import Qrgenerator from "../Home/Qrgenerator";
import Welcome from "../Home/Welcome";
const Navbar = () => {
  const Drawer = createDrawerNavigator();
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Start trip"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#5451D6",
            width: "75%",
          },
          headerTitleAlign: "center",
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  textAlignVertical: "center",
                  fontSize: 25,
                  color: "white",
                }}
              >
                BIAL GENIE
              </Text>
              <Image
                source={require("./../assets/rocket.png")}
                resizeMode="contain"
              />
            </View>
          ),

          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#5451D6", //Set Header color
          },
          // drawerIcon:{
          //   color:'red'
          // }
        }}
      >
        <Drawer.Screen
          name="Gajodhar Singh"
          component={Def}
          options={{
            drawerLabelStyle: {
              color: "white",
              fontSize: 20,
            },
            drawerIcon: () => (
              <Image
                source={require("./../assets/pp.png")}
                style={{ height: 40, width: 40, borderRadius: 25, margin: 0 }}
              />
            ),
          }}
        />
        
        <Drawer.Screen
          name="Start trip"
          component={Welcome}
          options={{
            drawerLabelStyle: {
              color: "white",
            },
          }}
        />
        <Drawer.Screen
          name="History"
          component={History}
          options={{
            drawerLabelStyle: {
              color: "white",
            },
          }}
        />
        <Drawer.Screen
          name="Scan QR Code"
          component={Scanner}
          options={{
            drawerLabelStyle: {
              color: "white",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5451D6",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    zIndex: -1,
  },
});

export default Navbar;
