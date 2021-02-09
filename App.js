import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Stars from "./assets/components/Stars";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Stars</Text>
      <StatusBar style="auto" />
      <Stars star={0} />
      <Stars star={1} />
      <Stars star={2} />
      <Stars star={3} />
      <Stars star={4} />
      <Stars star={5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
