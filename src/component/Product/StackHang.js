import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Các component con
import Hang from './Hang';
import ShowHang from './showHang';

const Stack = createStackNavigator();

class StackLogin extends Component {
    render() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Hàng" component={Hang} options={{ title: 'Sản phẩm' }}/>
          <Stack.Screen name="Show Hàng" component={ShowHang} options={{ title: 'Thông tin sản phẩm' }}/>
        </Stack.Navigator>
      );
    }
}
export default StackLogin;