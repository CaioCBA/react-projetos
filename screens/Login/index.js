import React, { useState } from "react";
import { Container, InputArea, CustomButton, CustomButtonText } from "./styles";
import { Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SignInput from "../../src/components/SignInput";

import LojaLogo from "../../segundoAssets/nielsen8.svg";
import EmailIcon from "../../src/assets/email.svg";
import LockIcon from "../../src/assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = () => {
    navigation.navigate({ name: "MainTab" });
    Alert.alert("LOGADO COM SUCESSO!");
  };
  return (
    <Container>
      <LojaLogo width="100%" height="480" />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
