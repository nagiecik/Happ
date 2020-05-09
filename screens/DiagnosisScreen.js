import React from "react";
import styled from "styled-components";

class DiagnosisScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <Container>
        <Text>Diagnosis Screen!</Text>
      </Container>
    );
  }
}

export default DiagnosisScreen;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: white;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: black;
`;
