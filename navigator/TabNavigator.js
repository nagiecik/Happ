import React from "react";
import styled from "styled-components";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import DiagnosisScreen from "../screens/DiagnosisScreen";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import HelperScreen from "../screens/HelperScreen";
import CovidScreen from "../screens/CovidScreen";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SplashScreen from "../screens/SplashScreen";
import SectionScreen from "../screens/SectionScreen";

const activeColor = "#FFFFFF";
const inactiveColor = "#A3B7D8";

const SplashStack = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Diagnosis: DiagnosisScreen,
    Appointments: AppointmentsScreen,
    Helper: HelperScreen,
    Covid: CovidScreen,
  },
  {
    mode: "modal",
  }
);

SplashStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Splash") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarOptions: {
      style: {
        backgroundColor: "#ffffff",
        height: 64,
      },
    },
    tabBarLabel: ({ focused }) => (
      <Label style={[focused ? styles.tabBarLabelFocused : styles.tabBarLabel]}>
        Home
      </Label>
    ),
    tabBarIcon: ({ focused }) => (
      <Background style={[focused ? styles.iconBackground : {}]}>
        <Ionicons
          name="ios-home"
          size={focused ? 26 : 24}
          color={focused ? activeColor : inactiveColor}
        />
      </Background>
    ),
  };
};

//NAVIGATION HOME
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: "#ffffff",
      height: 64,
    },
  },
  tabBarLabel: ({ focused }) => (
    <Label style={[focused ? styles.tabBarLabelFocused : styles.tabBarLabel]}>
      Home
    </Label>
  ),
  tabBarIcon: ({ focused }) => (
    <Background style={[focused ? styles.iconBackground : {}]}>
      <Ionicons
        name="ios-home"
        size={focused ? 26 : 24}
        color={focused ? activeColor : inactiveColor}
      />
    </Background>
  ),
};

//NAVIGATION DIAGNOSIS

const DiagnosisStack = createStackNavigator({
  Diagnosis: DiagnosisScreen,
});

DiagnosisStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: "#ffffff",
      height: 64,
    },
  },
  tabBarLabel: ({ focused }) => (
    <Label style={[focused ? styles.tabBarLabelFocused : styles.tabBarLabel]}>
      Diagnosis
    </Label>
  ),
  tabBarIcon: ({ focused }) => (
    <Background style={[focused ? styles.iconBackground : {}]}>
      <Ionicons
        name="ios-thermometer"
        size={focused ? 26 : 24}
        color={focused ? activeColor : inactiveColor}
      />
    </Background>
  ),
};

//NAVIGATION APPOINTMENTS

const AppointmentsStack = createStackNavigator({
  Appointments: AppointmentsScreen,
});

AppointmentsStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: "#ffffff",
      height: 64,
    },
  },
  tabBarLabel: ({ focused }) => (
    <Label style={[focused ? styles.tabBarLabelFocused : styles.tabBarLabel]}>
      Appointments
    </Label>
  ),
  tabBarIcon: ({ focused }) => (
    <Background style={[focused ? styles.iconBackground : {}]}>
      <Ionicons
        name="ios-calendar"
        size={focused ? 26 : 24}
        color={focused ? activeColor : inactiveColor}
      />
    </Background>
  ),
};

//NAVIGATION HELPER

const HelperStack = createStackNavigator({
  Helper: HelperScreen,
});

HelperStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: "#ffffff",
      height: 64,
    },
  },
  tabBarLabel: ({ focused }) => (
    <Label style={[focused ? styles.tabBarLabelFocused : styles.tabBarLabel]}>
      Helper
    </Label>
  ),
  tabBarIcon: ({ focused }) => (
    <Background style={[focused ? styles.iconBackground : {}]}>
      <Ionicons
        name="ios-help-buoy"
        size={focused ? 26 : 24}
        color={focused ? activeColor : inactiveColor}
      />
    </Background>
  ),
};

//NAVIGATION COVID

const CovidStack = createStackNavigator({
  Covid: CovidScreen,
});

CovidStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: "#ffffff",
      height: 64,
    },
  },
  tabBarLabel: ({ focused }) => (
    <Label style={[focused ? styles.tabBarLabelFocused : styles.tabBarLabel]}>
      Covid-19
    </Label>
  ),
  tabBarIcon: ({ focused }) => (
    <Background style={[focused ? styles.iconBackground : {}]}>
      <Ionicons
        name="ios-bug"
        size={focused ? 26 : 24}
        color={focused ? activeColor : inactiveColor}
      />
    </Background>
  ),
};

const TabNavigator = createBottomTabNavigator({
  // HomeStack,
  SplashStack,
  DiagnosisStack,
  AppointmentsStack,
  HelperStack,
  CovidStack,
});

const styles = StyleSheet.create({
  tabBarLabel: {
    paddingBottom: 10,
    fontSize: 12,
    textAlign: "center",
    color: "#4A72B2",
    opacity: 0.5,
  },
  tabBarLabelFocused: {
    paddingBottom: 10,
    fontSize: 12,
    textAlign: "center",
    color: "#4A72B2",
    opacity: 0,
  },
  iconBackground: {
    marginBottom: 37,
    backgroundColor: "#4A72B2",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;

const Label = styled.Text``;

const Background = styled.View``;
