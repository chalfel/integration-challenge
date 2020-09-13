import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

// TODO: Ler a Doc https://reactnavigation.org/docs/hello-react-navigation

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer></NavigationContainer>
    </View>
  );
}
