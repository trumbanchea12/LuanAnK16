import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Các component con
<<<<<<< HEAD:src/component/Product/StackHang.js
import Hang from './Hang';
import ShowHang from './showHang';
=======
import Hang from '../../component/Hang.js';
>>>>>>> 82499a2fbc26a21ed73b295a93aa6cd0e367009a:src/screens/navigation/StackHang.js

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