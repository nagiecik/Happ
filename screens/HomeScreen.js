import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import Card from "../components/Card";
import SecondCard from "../components/SecondCard";

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
        <ScrollView>
          <StainFirst source={require("../assets/stain1.png")}></StainFirst>
          <StainSecond source={require("../assets/stain2.png")}></StainSecond>
          <StainThird source={require("../assets/stain3.png")}></StainThird>
          <MenuIcon>
            <Ionicons name="ios-menu" size={44} color="#4A72B2" />
          </MenuIcon>
          <Start>
            <MainTitle>Hello, Jakub</MainTitle>
            <MainSubtitle>How do you feel today?</MainSubtitle>
            <Avatar source={require("../assets/avatar.png")}></Avatar>
          </Start>
          <Content>
            <TitleFirst>Daily Routine</TitleFirst>
            <ScrollView
              contentContainerStyle={{
                paddingLeft: 20,
                marginTop: 16,
              }}
              horizontal={true}
              style={{ paddingBottom: 30 }}
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
            <TitleSecond>Information</TitleSecond>
            <SecondCardContainer style={{ marginTop: 16, paddingBottom: 100 }}>
              {secondcards.map((card2, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    this.props.navigation.push("Section", {
                      section: card2,
                    });
                  }}
                >
                  <SecondCard
                    title={card2.title}
                    caption={card2.caption}
                    image={card2.image}
                  />
                </TouchableOpacity>
              ))}
            </SecondCardContainer>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default HomeScreen;

const SecondCardContainer = styled.View``;

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

const Content = styled.View``;

const Start = styled.View`
  margin-top: 92px;
  margin-left: 16px;
`;

const MenuIcon = styled.View`
  position: absolute;
  top: 44px;
  left: 16px;
`;

const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 22px;
  position: absolute;
  top: 6px;
  right: 16px;
`;

const MainTitle = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #4a72b2;
`;

const MainSubtitle = styled.Text`
  font-size: 14px;
  color: #4a72b2;
  opacity: 0.6;
`;

const TitleFirst = styled.Text`
  color: #4a72b2;
  font-size: 28px;
  font-weight: bold;
  margin-top: 48px;
  margin-left: 16px;
`;

const TitleSecond = styled.Text`
  color: #4a72b2;
  font-size: 28px;
  font-weight: bold;
  margin-left: 16px;
  margin-top: 16px;
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

const cards = [
  {
    title: "Health Diaries",
    image: require("../assets/background11.jpg"),
    subtitle: "Tap to fill health diary",
    caption:
      "The health diary will allow you to regularly check your condition.",
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.<h2>Downloads</h2><p>Feel free to use your own designs and apply your own styling. You can also use my design if you wish to follow exactly what I have. You can access all the React files and images here.</p>",
  },
  {
    title: "Risk tests",
    image: require("../assets/background12.jpg"),
    subtitle: "Tap to fill risk test",
    caption:
      "Checking your infection risk every day will help you be positive.",
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.",
  },
];

const secondcards = [
  {
    title: "Legal information",
    image: require("../assets/legal-information-illustration-1.png"),
    subtitle: "Tap to fill health diary",
    caption: "Everything about how to behave during a pandemic.",
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.<h2>Downloads</h2><p>Feel free to use your own designs and apply your own styling. You can also use my design if you wish to follow exactly what I have. You can access all the React files and images here.</p>",
  },
  {
    title: "Requirement rules",
    image: require("../assets/requirement-illustration-2.png"),
    subtitle: "Tap to fill risk test",
    caption: "All information about rules and rights during the epidemic.",
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.",
  },
  {
    title: "Specialist tips",
    image: require("../assets/special-tips-illustration-3.png"),
    subtitle: "Tap to fill risk test",
    caption: "Do you want to know how to act in difficult times?",
    content:
      "Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customizable.",
  },
];
