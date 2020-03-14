import React, { Component } from "react";
import { View, Text,Button } from "react-native";

export default class Detail extends Component {
  render() {
    return (
      <View>
        <Text>detail</Text>
        <Button
          title="go to detail"
          onPress={() => this.props.navigation.navigate("Feed")}
        />
      </View>
    );
  }
}
