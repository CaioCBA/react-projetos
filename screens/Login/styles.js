import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #313036;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;
export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #6d540a;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
