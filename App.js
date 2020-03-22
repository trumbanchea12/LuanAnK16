import React, { Component } from "react";
//mang hinh drawer
import { Block, Text } from "expo-ui-kit";
import { StyleSheet } from "react-native";
import Drawers2 from "./src/component/Drawers/Drawer";
// mang hinh drawer

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerItems } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

//import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import Feed from "./src/screens/Feed";
import Detail from "./src/screens/Detail";

import Screen1 from "./src/screens/drawer/screen1.js";
import Screen2 from "./src/screens/drawer/screen2.js";
import StackLogin from "./src/component/Login/StackLogin";

//import StackLogin from "./src/screens/navigation/StackLogin"
import DangNhap from "./src/screens/drawer/DangNhap.js";
import DanngKy from "./src/screens/drawer/DangKy.js";

import Tabs1 from "./src/screens/tabs/tab1";
import Tabs2 from "./src/screens/tabs/tab2";
import Tabs3 from "./src/screens/tabs/tab3";

// Stack Hàng
import HangHoa from "./src/component/Product/StackHang";
// Ca nhân
import CaNhan from "./src/component/person/caNhan";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          {/* <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          /> */}
        </TouchableOpacity>
      </View>
    );
  }
}

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



class Drawers extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Feed">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="contacts contacts" component={Screen1} />
        <Drawer.Screen name="Favarites" component={Screen2} />
        <Drawer.Screen name="Đăng nhập/đăng ký " component={StackLogin} />
      </Drawer.Navigator>
    );
  }
}

export default
class Tab extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return (
                  <Ionicons
                    name={focused ? "ios-home" : "md-home"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Hàng") {
                return (
                  <Ionicons
                    name={focused ? "md-cart" : "md-cart"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Cá nhân") {
                return (
                  <Ionicons
                    name={focused ? "md-person" : "md-person"}
                    size={size}
                    color={color}
                  />
                );
              }
            }
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
          }}
        >
          <Stack.Screen name="Home" component={Drawers2} />
          <Stack.Screen name="Hàng" component={HangHoa} />
          <Stack.Screen name="Cá nhân" component={CaNhan} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}

//export default 
class A extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer2/>
      {/* <Block secondary center middle>
        <Text>abs wellcome</Text>
        <Text bold>this is react-navigation v5</Text>
      </Block> */}
      </NavigationContainer>
    );
  }
}
