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
  return (
    <Container>
      <HeaderArea>
      <HeaderTitle>Profile</HeaderTitle>
      </HeaderArea>
    </Container>
  );
};
