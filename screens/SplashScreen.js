import React from "react";
import {
  StatusBar,
  Animated,
  Dimensions,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./HomeScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

let screenHeight = Dimensions.get("window").height;

class SplashScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    opacity: new Animated.Value(0),
    top: new Animated.Value(screenHeight / 2),
    translateY: new Animated.Value(0),
    scale: new Animated.Value(0),
    stainPosition: new Animated.Value(0),
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);

    //Start Animation
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bezier(0.18, 0.82, 0.19, 0.9),
    }).start();

    Animated.timing(this.state.stainPosition, {
      toValue: 35,
      duration: 1000,
      easing: Easing.bezier(0.18, 0.82, 0.19, 0.9),
    }).start();

    //Exit Animation
    setTimeout(() => {
      Animated.timing(this.state.stainPosition, {
        toValue: 0,
        duration: 1000,
        easing: Easing.bezier(0.18, 0.82, 0.19, 0.9),
      }).start();

      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0.18, 0.82, 0.19, 0.9),
      }).start();

      Animated.timing(this.state.top, {
        toValue: screenHeight / 2 + 100,
        duration: 1000,
        easing: Easing.bezier(0.18, 0.82, 0.19, 0.9),
      }).start();

      Animated.timing(this.state.translateY, {
        toValue: -32,
        duration: 1000,
        easing: Easing.bezier(0.18, 0.82, 0.19, 0.9),
      }).start();
    }, 1000);

    //Exit SplashScreen
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate("Home");
    }, 3000);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    return (
      <Container>
        <LinearGradient
          colors={["#0093E9", "#9ECAEF"]}
          start={[0, 1]}
          end={[1, 0]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
        <AnimatedStains
          style={{
            top: this.state.stainPosition,
          }}
        >
          <StainFirst source={require("../assets/stain1.png")}></StainFirst>
          <StainSecond source={require("../assets/stain2.png")}></StainSecond>
          <StainThird source={require("../assets/stain3.png")}></StainThird>
        </AnimatedStains>
        <AnimatedLogo
          style={{
            transform: [
              { translateY: this.state.translateY },
              { scale: this.state.scale },
            ],
          }}
          source={require("../assets/logo.png")}
        ></AnimatedLogo>
        <AnimatedTextLogo
          style={{
            opacity: this.state.opacity,
            top: this.state.top,
          }}
          source={require("../assets/happ.png")}
        ></AnimatedTextLogo>
      </Container>
    );
  }
}
export default SplashScreen;

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

const AnimatedLogo = Animated.createAnimatedComponent(Logo);

const TextLogo = styled.Image`
  width: 232px;
  height: 48px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: absolute;
  top: 20px;
`;

const AnimatedTextLogo = Animated.createAnimatedComponent(TextLogo);

const StainFirst = styled.Image`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 30px;
  right: -215px;
  top: -135px;
`;

const StainSecond = styled.Image`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 30px;
  left: -240px;
  top: 150px;
`;

const StainThird = styled.Image`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 30px;
  left: 240px;
  top: 600px;
`;

const Stains = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const AnimatedStains = Animated.createAnimatedComponent(Stains);
