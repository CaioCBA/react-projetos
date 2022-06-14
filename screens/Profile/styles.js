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
  borderBottomColor: #696969;
  borderBottomWidth: 2px;
  margin: 20px;
`;
export const BodyArea = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;
export const UserContainer = styled.View`
  height: 50px;
  background-color: #fff;
  borderRadius: 10px;
  align-items: stretch;
  margin: 15px;
`;
export const UserText = styled.Text`
  padding: 10px;
  font-size: 13px;
  color: #696969;
  margin-top: 5px;
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
  marginLeft: 20px;
  width: 120px;
  height: 120px;
  borderRadius: 100px;
  backgroundColor: #fff;
`;
