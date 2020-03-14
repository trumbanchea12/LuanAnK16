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
<<<<<<< HEAD
          
=======
>>>>>>> d2e6e591cd04285e41fb3c46897c9de2c280c1ab
      </View>
    );
  }
}
