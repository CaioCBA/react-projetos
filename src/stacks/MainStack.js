import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../../screens/Preload";
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import MainTab from "../stacks/MainTab";
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
