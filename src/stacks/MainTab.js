import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Home from "../../screens/Home";
import Categories from "../../screens/Categories";
import Supermarkets from "../../screens/Supermarkets";
import Profile from "../../screens/Profile";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Categories" component={Categories} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
