import React from "react";

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  ${"" /* background-color: #1e1d21; */}
  background-color: #1e1d21;
`;
export const ContainerImg = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 10px 10px 10px;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderArea = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const containerItems = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const containerText = styled.View`
  alignitems: "center";
`;
