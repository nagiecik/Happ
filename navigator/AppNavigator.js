import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import SectionScreen from "../screens/SectionScreen";

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Section: SectionScreen,
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(AppNavigator);
