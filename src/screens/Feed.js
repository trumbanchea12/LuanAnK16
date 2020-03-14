import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export default class Feed extends Component {
  render() {
    return (
      <View>
        <Text>Feed</Text>
        <Button
          title="go to detail"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
          <Text>abc</Text>
          <Button
          title="open drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </View>
    );
  }
}
