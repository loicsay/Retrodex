import React from "react";
import { Text, StyleSheet } from "react-native";

const PokemonText = ({ children }) => (
  <Text style={styles.pokemonText}>{children}</Text>
);

const styles = StyleSheet.create({
  pokemonText: {
    fontFamily: "pokemon-font",
    fontSize: 18,
    textTransform: "uppercase"
  }
});

export default PokemonText;
