import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex1"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
          // headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
