import React, { useState, useEffect } from "react";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
} from "./styles";

import SearchIcon from "../../src/assets/search.svg";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle numberOfLines={2}>
          Encontre aqui o que você quer comprar!
        </HeaderTitle>
      </HeaderArea>
      <Image
        style={styles.containerImg}
        source={require("../../imagens-aplicativo/conjunto-de-frutas-vegetais-e-objetos-de-conjunto-de-agua-isolados-no-fundo-branco-para-vegetarianos-e-curar_65580-234.jpg")}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "100%",
    height: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  listItem: {
    backgroundColor: "#121212",
    padding: 25,
    marginTop: 25,
    borderRadius: 10,
  },
  listText: {
    fontSize: 16,
    color: "#FFF",
  },
});
