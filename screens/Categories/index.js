import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  ContainerImg,
} from "./styles";

export default () => {
  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>
          <Text>Carrinho</Text>
        </HeaderTitle>
      </HeaderArea>
      <View
        style={{
          borderBottomColor: "#696969",
          borderBottomWidth: 1,
          marginTop: 20,
        }}
      />
    </Container>
  );
};
