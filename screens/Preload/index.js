import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import LojaLogo from "../../segundoAssets/nielsen8.svg";

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        console.log("cuu");
      } else {
        navigation.navigate("Login");
      }
    };
    checkToken();
  });
  return (
    <Container>
      <LojaLogo width="100%" height="480" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
