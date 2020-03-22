import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Block } from "expo-ui-kit";

const Home = () => {
  return (
    <Block  color="#88B04B" center middle>
      <Text h2 white>Home</Text>
    </Block>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: "center",
  }
});




