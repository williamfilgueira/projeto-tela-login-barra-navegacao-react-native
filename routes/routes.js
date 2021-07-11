import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TelaInicial from "../src/Screens/TelaInicial/TelaInicial";
import TelaPerfil from "../src/Screens/TelaPerfil/TelaPerfil";
import TelaLogin from "../src/Screens/Login/TelaLogin";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: "teal",
          tabBarLabel:false,
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{
            tabBarIcon: ({ color, size, textColor }) => (
              <MaterialCommunityIcons name="account" color={color} size={20} />
            ),
          }}
        />
        <Tabs.Screen
          name="Login"
          component={TelaLogin}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
