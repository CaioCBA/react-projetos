import React, { useState, useEffect } from "react";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  ContainerImg,
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
  ScrollView,
} from "react-native";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle numberOfLines={6}>
          Encontre aqui o que você quer comprar!
        </HeaderTitle>
      </HeaderArea>
      <View
        style={{
          borderBottomColor: "#696969",
          borderBottomWidth: 1,
          marginTop: 20,
        }}
      />
      <ContainerImg>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/macarrao.jpg")}
        />
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/leitepo.png")}
        />
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/alho.png")}
        />
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/banana.png")}
        />
      </ContainerImg>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    width: 85,
    height: 85,
    backgroundColor: "#FFF",
    borderWidth: 4,
    borderColor: "#000",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  scrollView: {
    marginHorizontal: 20,
    flexDirection: "row",
  },
});
