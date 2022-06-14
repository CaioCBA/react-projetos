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
  ScrollView,
} from "react-native";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle numberOfLines={1}>
          Encontre aqui o que você quer comprar!
        </HeaderTitle>
      </HeaderArea>
      <ScrollView>
        <Text style={styles.listText}>CUZINHO CHEROSO</Text>
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
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: "#FFF",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FA5030",
    marginLeft: 10,
  },
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  listItem: {
    backgroundColor: "#121212",
    padding: 25,
    marginTop: 25,
    borderRadius: 10,
  },
  listText: {
    fontSize: 16,
    color: "#1e1d21",
  },
});
