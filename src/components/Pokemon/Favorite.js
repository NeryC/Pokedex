import React, { useEffect, useState } from "react";
import IconAdd from "react-native-vector-icons/FontAwesome5";
import IconRmv from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/favorite";

export default function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const Icon = isFavorite ? IconRmv : IconAdd;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, []);

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  const removeFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };
  return (
    <Icon
      name="heart"
      color={"#fff"}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
