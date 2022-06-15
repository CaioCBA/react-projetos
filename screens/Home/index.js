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
  Button,
  TouchableOpacity
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

        <TouchableOpacity
         onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/alface.png")}
        />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/tomate.png")}
        

        />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/banana.png")}
        

        />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/cebolas.png")}
        />
        </TouchableOpacity>


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
          Não Perecíveis
        </Text>
      </View>
      <ContainerImg>


      <TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/arroz.png")}
        />
</TouchableOpacity>

<TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/feijao.png")}
        />
</TouchableOpacity>

<TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>

         
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/sal.png")}
        />
</TouchableOpacity>

<TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>

        
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/farinhadetrigo.jpg")}
        />
        </TouchableOpacity >


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

      <TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/paoforma.jpg")}
        />
</TouchableOpacity>
<TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/biscoito.jpg")}
        />
        </TouchableOpacity>

<TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/manteiga.png")}
        />
        </TouchableOpacity>

<TouchableOpacity
        onPress={() => {
          alert('Ja esta adicionado ao carrinho!')
         }}>
        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/oleo.png")}
        />
        </TouchableOpacity>
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
