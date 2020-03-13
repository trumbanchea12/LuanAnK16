import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DangNhap from "../drawer/DangNhap.js";
import DanngKy from "../drawer/DangKy.js";

const Stack = createStackNavigator();

class StackLogin extends Component {
    render() {
      return (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="DangNhap" component={DangNhap} />
          <Stack.Screen name="DangKy" component={DanngKy} />
        </Stack.Navigator>
      );
    }
}
export default StackLogin;