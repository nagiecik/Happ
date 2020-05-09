import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import DiagnosisScreen from "../screens/DiagnosisScreen";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import HelperScreen from "../screens/HelperScreen";
import CovidScreen from "../screens/CovidScreen";
import TabNavigator from "./TabNavigator";
import SplashScreen from "../screens/SplashScreen";
import SectionScreen from "../screens/SectionScreen";

const AppNavigator = createStackNavigator({
  Splash: SplashScreen,
  Home: HomeScreen,
});

export default createAppContainer(TabNavigator);
