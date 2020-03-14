import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Feed from "./src/screens/Feed";
import Detail from "./src/screens/Detail";

import Screen1 from "./src/screens/drawer/screen1.js";
import Screen2 from "./src/screens/drawer/screen2.js";

import StackLogin from "./src/screens/navigation/StackLogin"
import DangNhap from "./src/screens/drawer/DangNhap.js";
import DanngKy from "./src/screens/drawer/DangKy.js";

import Tabs1 from "./src/screens/tabs/tab1";
import Tabs2 from "./src/screens/tabs/tab2";
import Tabs3 from "./src/screens/tabs/tab3";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  }
}

class Tab2 extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  }
}

class Tab3 extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  }
}

class Drawers extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="contacts" component={Screen1} />
        <Drawer.Screen name="Favarites" component={Screen2} />
        <Drawer.Screen name="Đăng nhập/đăng ký" component={StackLogin} />
      </Drawer.Navigator>
    );
  }
}



export default class Tab extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator>
          <Stack.Screen name="Home" component={Drawers} />
          <Stack.Screen name="Search" component={Tabs2} />
          <Stack.Screen name="Tôi" component={Tabs3} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}
