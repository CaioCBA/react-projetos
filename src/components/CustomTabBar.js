import React from "react";
import styled from "styled-components/native";

import HomeIcon from "../assets/home.svg";
import CategoryIcon from "../../segundoAssets/botao-da-cesta-de-compras.svg";
import ProfileIcon from "../assets/person.svg";

const TabArea = styled.View`
  height: 60px;
  background-color: #302f35;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background: #918a85;
  border-radius: 35px;
  border: 5px solid #302f35;
  margin-top: -20px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Home")}>
        <HomeIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="36"
          height="36"
          fill="#000"
        />
      </TabItem>

    

      <TabItem onPress={() => goTo("Profile")}>
        <ProfileIcon
          style={{ opacity: state.index === 2 ? 1 : 0.5 }}
          width="30"
          height="30"
          fill="#000"
        />
      </TabItem>
    </TabArea>
  );
};
