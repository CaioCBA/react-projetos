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
      <View>
        <Text
          style={[
            styles.fontText,
            {
              alignSelf: "center",
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderColor: "#FFF",
              marginTop: 20,
            },
          ]}
        >
          Hortifruti
        </Text>
      </View>

      <ContainerImg>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/alface.png")}
        />
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/tomate.png")}
        />
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/banana.png")}
        />
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/cebolas.png")}
        />
      </ContainerImg>
      <View
        style={{
          borderBottomColor: "#000",
          borderBottomWidth: 0.5,
          marginTop: 20,
        }}
      />
      <View>
        <Text
          style={[
            styles.fontText,
            {
              alignSelf: "center",
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderColor: "#FFF",
              marginTop: 10,
            },
          ]}
        >
          Grãos
        </Text>
      </View>
      <ContainerImg>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/arroz.png")}
        />
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/feijao.png")}
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
      <View
        style={{
          borderBottomColor: "#000",
          borderBottomWidth: 0.5,
          marginTop: 20,
        }}
      />
      <View>
        <Text
          style={[
            styles.fontText,
            {
              alignSelf: "center",

              borderTopWidth: 2,

              borderBottomWidth: 2,

              borderColor: "#FFF",
              marginTop: 10,
            },
          ]}
        >
          Afins
        </Text>
      </View>
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
    borderRadius: 32,
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
  fontText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#9896a5",
  },
});
