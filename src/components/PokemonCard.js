import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { capitalize } from "lodash";

export default function PokemonCard({ pokemonInfo }) {
  const pokemonColor = getColorByPokemonType(pokemonInfo.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyle };
  const goToPokemon = () => {
    console.log(pokemonInfo.name);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemonInfo.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemonInfo.name)}</Text>
            <Image source={{ uri: pokemonInfo.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
});
