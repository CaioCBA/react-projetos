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

const hortifruti = [
  {
    key: 0,
    nome: "Alface",
    preco: 5.49,
    image: "./imagens-produtos/alface.png",
  },
  {
    key: 1,
    nome: "Alho",
    preco: 18.7,
    image: "./imagens-produtos/alho.png",
  },
  {
    key: 2,
    nome: "Banana",
    preco: 5.93,
    image: "./imagens-produtos/banana.png",
  },
  {
    key: 3,
    nome: "Cebola",
    preco: 6.5,
    image: "./imagens-produtos/cebolas.png",
  },
  {
    key: 4,
    nome: "Tomate",
    preco: 7.5,
    image: "./imagens-produtos/tomate.png",
  },
];

const geral = [
  {
    key: 5,
    nome: "Arroz",
    preco: 21.45,
    image: "./imagens-produtos/arroz.png",
  },
  {
    key: 6,
    nome: "Biscoito",
    preco: 4.99,
    image: "./imagens-produtos/biscoito.png",
  },
  {
    key: 7,
    nome: "Café",
    preco: 7.65,
    image: "./imagens-produtos/cafe.png",
  },
  {
    key: 8,
    nome: "Trigo",
    preco: 6.19,
    image: "./imagens-produtos/farinhadetrigo.png",
  },
  {
    key: 9,
    nome: "Feijão",
    preco: 8.79,
    image: "./imagens-produtos/feijao.png",
  },
  {
    key: 10,
    nome: "Leite em pó",
    preco: 34.9,
    image: "./imagens-produtos/leitepo.png",
  },
  {
    key: 11,
    nome: "Macarrão",
    preco: 3.79,
    image: "./imagens-produtos/macarrao.png",
  },
  {
    key: 12,
    nome: "Margarina",
    preco: 16.95,
    image: "./imagens-produtos/manteiga.png",
  },
  {
    key: 13,
    nome: "Milho",
    preco: 4.71,
    image: "./imagens-produtos/milho.png",
  },
  {
    key: 14,
    nome: "Molho de tomate",
    preco: 4.47,
    image: "./imagens-produtos/molhodetomate.png",
  },
  {
    key: 15,
    nome: "Óleo",
    preco: 10.68,
    image: "./imagens-produtos/óleo.png",
  },
  {
    key: 16,
    nome: "Pão de Forma",
    preco: 9.3,
    image: "./imagens-produtos/paoforma.png",
  },
  {
    key: 17,
    nome: "Sal",
    preco: 1.05,
    image: "./imagens-produtos/sal.png",
  },
  {
    key: 18,
    nome: "Salsicha",
    preco: 13.09,
    image: "./imagens-produtos/salsicha.png",
  },
  {
    key: 19,
    nome: "Sardinha",
    preco: 4.47,
    image: "./imagens-produtos/sardina.png",
  },
  {
    key: 20,
    nome: "Açúcar",
    preco: 7.99,
    image: "./imagens-produtos/sugar.png",
  },
];

const ListItem = ({ data }) => {
  return (
    <View style={styles.listItem}>
      <Text styles={styles.listText}>{data.nome}</Text>
    </View>
  );
};

export default () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  async function loadApi() {}

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle numberOfLines={2}>
          Encontre aqui o que você quer comprar!
        </HeaderTitle>
        <SearchButton onPress={() => navigation.navigate("Categories")}>
          <SearchIcon width="26" height="26" fill="#ffffff" />
        </SearchButton>
      </HeaderArea>

      <FlatList
        style={{ marginTop: 50 }}
        contentContainerStyle={{ marginHorizontal: 20 }}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ListItem data={item} />}
      />
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
