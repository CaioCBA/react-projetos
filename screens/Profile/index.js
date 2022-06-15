import React from "react";

import {
  Container,
  HeaderArea,
  HeaderTitle,
  Base,
  Div,
  BodyArea,
  UserContainer,
  UserText,
  UserTypes,
} from "./styles";

import {
  Image,
  StyleSheet,
} from "react-native";

export default () => {
  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>Perfil</HeaderTitle>
      </HeaderArea>
      <Image 
        style={styles.Img}
        source={require("../../imagens-aplicativo/joaovictor.jpeg")}
      />
      <Div/>
      <BodyArea>
        <UserTypes>Nome</UserTypes>
        <UserContainer>
          <UserText>Carmona</UserText>
        </UserContainer>
        <UserTypes>Endereço</UserTypes>
        <UserContainer>
          <UserText>Rua sambalelê, Quadra 21, Residencial João Vitor</UserText>
        </UserContainer>
        <UserTypes>Telefone</UserTypes>
        <UserContainer>
          <UserText>(91) 8919-7360</UserText>
        </UserContainer>
      </BodyArea>
    </Container>
  );
};

const styles = StyleSheet.create({
  Img: {
    width: 119,
    height: 119,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 100,
  },
});