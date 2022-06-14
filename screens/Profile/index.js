import React, { useState, useEffect } from "react";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  Base,
  Div,
  BodyArea,
  UserContainer,
  UserText,
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
  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>Perfil</HeaderTitle>
      </HeaderArea>
      <Base/>
      <Div/>
      <BodyArea>
        <UserContainer>
          <UserText>Carmona</UserText>
        </UserContainer>
        <UserContainer>
          <UserText>Rua sambalelê, Quadra 21, Residencial João Vitor</UserText>
        </UserContainer>
        <UserContainer>
          <UserText>(91) 8919-7360</UserText>
        </UserContainer>
      </BodyArea>
    </Container>
  );
};
