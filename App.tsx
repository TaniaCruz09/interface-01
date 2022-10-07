import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import ProfileScreen from "./src/ProfileScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <ProfileScreen />
    </SafeAreaView>
  );
}
