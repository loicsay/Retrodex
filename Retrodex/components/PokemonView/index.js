import React from "react";
import { View } from "react-native";

import Layout from "../Layout";
import Infos from "./components/Infos";
import Description from "./components/Description";
import BackButton from "./components/BackButton";
import { imagesSources } from "./utils";

const PokemonView = ({ navigation }) => {
  const pokemon = navigation.getParam("pokemon");
  const selectSound = navigation.getParam("selectSound");

  return (
    <Layout>
      <View>
        <Infos
          imageSource={imagesSources[pokemon.national_id]}
          pokemon={pokemon}
        />
        <Description description={pokemon.pokedex_entries.Blue.en} />
      </View>
      <BackButton navigation={navigation} selectSound={selectSound} />
    </Layout>
  );
};

PokemonView.navigationOptions = {
  headerStyle: {
    display: "none"
  }
};

export default PokemonView;
