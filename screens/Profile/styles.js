import React from "react";

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1d21;
`;
export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Div = styled.View`
  borderbottomcolor: #696969;
  borderbottomwidth: 2px;
  margin: 20px;
`;
export const BodyArea = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;
export const UserContainer = styled.View`
  height: 45px;
  background-color: #fff;
  borderradius: 10px;
  align-items: stretch;
  margin: 15px;
`;
export const UserTypes = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 5px;
  margin-left: 20px;
`;
export const UserText = styled.Text`
  padding: 10px;
  font-size: 14px;
  color: #696969;
  margin-top: 1px;
  font-weight: bold;
`;
export const HeaderTitle = styled.Text`
  padding: 20px;
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 15px;
`;
export const Base = styled.View`
  marginleft: 20px;
  width: 120px;
  height: 120px;
  borderradius: 100px;
  backgroundcolor: #fff;
`;
