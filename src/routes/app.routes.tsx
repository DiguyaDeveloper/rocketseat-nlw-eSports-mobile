import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/Home/Home";
import { GameScreen } from "../Screens/Game/Game";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="game" component={GameScreen} />
    </Navigator>
  );
}
