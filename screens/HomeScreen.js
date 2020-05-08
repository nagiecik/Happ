import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import Card from "../components/Card";

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    return (
      <Container>
        <StainFirst source={require("../assets/stain1.png")}></StainFirst>
        <StainSecond source={require("../assets/stain2.png")}></StainSecond>
        <StainThird source={require("../assets/stain3.png")}></StainThird>
        <MenuIcon>
          <Ionicons name="ios-menu" size={44} color="#4A72B2" />
        </MenuIcon>
        <MainTitle>Hello, Jakub</MainTitle>
        <MainSubtitle>How do you feel today?</MainSubtitle>
        <TitleFirst>Daily Routine</TitleFirst>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
            paddingLeft: 20,
          }}
          horizontal={true}
          style={{ paddingBottom: 30, marginTop: 282 }}
          showsHorizontalScrollIndicator={false}
        >
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={{
                paddingBottom: 20,
                paddingRight: 20,
                marginLeft: -20,
              }}
              onPress={() => {
                this.props.navigation.push("Section", {
                  section: card,
                });
              }}
            >
              <Card
                title={card.title}
                image={card.image}
                caption={card.caption}
                logo={card.logo}
                subtitle={card.subtitle}
                content={card.content}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Avatar source={require("../assets/avatar.png")}></Avatar>
      </Container>
    );
  }
}

export default HomeScreen;

const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  justify-content: center;
  align-items: center;
`;

const MenuIcon = styled.View`
  position: absolute;
  top: 60px;
  left: 16px;
`;

const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 22px;
  position: absolute;
  top: 118px;
  right: 16px;
`;

const MainTitle = styled.Text`
  position: absolute;
  top: 112px;
  left: 16px;
  font-size: 34px;
  font-weight: bold;
  color: #4a72b2;
`;

const MainSubtitle = styled.Text`
  position: absolute;
  top: 160px;
  left: 16px;
  font-size: 14px;
  color: #4a72b2;
  opacity: 0.6;
`;

const StainFirst = styled.Image`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 30px;
  right: -215px;
  top: -135px;
  opacity: 0.3;
`;

const StainSecond = styled.Image`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 30px;
  left: -240px;
  top: 150px;
  opacity: 0.3;
`;

const StainThird = styled.Image`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 30px;
  left: 240px;
  top: 600px;
  opacity: 0.3;
`;

const TitleFirst = styled.Text`
  position: absolute;
  top: 224px;
  left: 16px;
  color: #4a72b2;
  font-size: 22px;
  font-weight: bold;
`;

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-react.png"),
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.<h2>Downloads</h2><p>Feel free to use your own designs and apply your own styling. You can also use my design if you wish to follow exactly what I have. You can access all the React files and images here.</p>",
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("../assets/logo-react.png"),
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.",
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("../assets/logo-react.png"),
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.",
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("../assets/logo-react.png"),
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.",
  },
];
