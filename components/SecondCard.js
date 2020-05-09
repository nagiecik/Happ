import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

let screenWidth = Dimensions.get("window").width;

const SecondCard = (props) => (
  <LinearGradient
    style={{
      width: screenWidth - 48,
      height: 120,
      borderRadius: 14,
      marginLeft: 16,
      marginTop: 32,
    }}
    colors={["#6092E2", "#4A72B2"]}
    start={[0, 0]}
    end={[1, 1]}
  >
    <Image source={props.image} />
    <Title>{props.title}</Title>
    <Caption>{props.caption}</Caption>
  </LinearGradient>
);

export default SecondCard;

// const Container = styled.View`
//   background-color: #0093e9;
//   height: 120px;
//   border-radius: 14px;
//   margin-left: 16px;
//   margin-top: 32px;
//   elevation: 8;
// `;

const Title = styled.Text`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 16px;
  width: 254px;
`;

const Caption = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  margin-left: 16px;
  margin-top: 16px;
  opacity: 0.7;
  width: 220px;
`;

const Image = styled.Image`
  width: 83px;
  height: 110px;
  position: absolute;
  right: 16px;
  bottom: 32px;
`;
