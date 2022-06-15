import React, {useState} from "react";
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

  const SView = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={{ width: 200, height: 40, margin: 10 }} label="placeholder" />
        <TextInput style={{ width: 200, height: 40, margin: 10 }} label="placeholder" />
      </View>
    );
  };

  const [view, setView] = useState();
  
 

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
      
      <ContainerImg>

      <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/alface.png")}
        />

      <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/tomate.png")}
        />

      
        </ContainerImg>

      {/* </ContainerImg>
      
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
          source={require("../../src/imagens-produtos/sal.png")}
        />

        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/farinhadetrigo.jpg")}
        />

      </ContainerImg>
      <ContainerImg>

      <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/paoforma.jpg")}
        />

        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/biscoito.jpg")}
        />

        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/manteiga.png")}
        />

        <Image
          style={styles.containerImg}
          source={require("../../src/imagens-produtos/oleo.png")}
        />
      </ContainerImg> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    width: 200,
    height: 200,
    backgroundColor: "#FFF",
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 32,
  },
});