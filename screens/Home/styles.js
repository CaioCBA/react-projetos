import React from "react";

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1d21;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 15px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const containerItems = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;
