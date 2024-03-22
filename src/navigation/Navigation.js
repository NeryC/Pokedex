import { Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../screens/Favorite";
import Account from "../screens/Account";
import Icon from "react-native-vector-icons/FontAwesome5";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          title: "",
          tabBarIcon: () => renderPokeball(),
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const renderPokeball = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
};
