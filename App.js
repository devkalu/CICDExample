import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Greeting from "./src/screen/Greeting";

export default function App() {
  return <Greeting />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
