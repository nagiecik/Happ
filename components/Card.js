import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;

const Card = (props) => (
  <Container style={{ width: screenWidth - 48 }}>
    <Cover>
      <Image source={props.image} />
    </Cover>
    <Title>{props.title}</Title>
    <Caption style={{ width: screenWidth - 80 }}>{props.caption}</Caption>
    <Subtitle>{props.subtitle}</Subtitle>
  </Container>
);

export default Card;

const Container = styled.View`
  background: white;
  height: 300px;
  border-radius: 14px;
  margin-left: 16px;
  margin-top: 20px;
  elevation: 8;
`;

const Title = styled.Text`
  color: #4a72b2;
  font-size: 28px;
  font-weight: bold;
  margin-top: 16px;
  margin-left: 16px;
  width: 300px;
`;

const Caption = styled.Text`
  color: #4a72b2;
  font-size: 17px;
  font-weight: 600;
  margin-left: 16px;
  margin-top: 8px;
`;

const Subtitle = styled.Text`
  color: #4a72b2;
  font-weight: 600;
  font-size: 15px;
  margin-left: 16px;
  margin-top: 24px;
  margin-bottom: 16px;
  opacity: 0.5;
`;

const Cover = styled.View`
  width: 100%;
  height: 150px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
