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
import { FlatList, SafeAreaView, Text, StyleSheet, View } from "react-native";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle numberOfLines={2}>
          Encontre aqui o que você quer comprar!
        </HeaderTitle>
      </HeaderArea>
    </Container>
  );
};

const styles = StyleSheet.create({
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
