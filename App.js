import React from "react";
import Home from "./src/pages/Home";
import Flexbox from "./src/pages/Flexbox";
import IMC from "./src/pages/IMC";
import Conversor from "./src/pages/Conversor";
import TodoList from "./src/pages/TodoList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista"
        component={TodoList}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Conversor"
        component={Conversor}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="monetization-on" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="IMC"
        component={IMC}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="arm-flex" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="FlexBox"
        component={Flexbox}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="rocket" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
