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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          <Button
          title="open drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
          
>>>>>>> 7dc81d578a56ca88929850f6f1e2dbc2b677ec3d
>>>>>>> 384342a684741b2d3b11f8e294bd4bb2441a5e56
      </View>
    );
  }
}
