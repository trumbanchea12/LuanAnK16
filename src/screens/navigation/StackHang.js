import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Các component con
import Hang from '../../component/Hang.js';

const Stack = createStackNavigator();

class StackLogin extends Component {
    render() {
      return (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Hàng" component={Hang} />
        </Stack.Navigator>
      );
    }
}
export default StackLogin;