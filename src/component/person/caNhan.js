import React, { Component } from 'react';
import {View, Text} from "react-native";
import BaiDang from "./BaiDang";
import HangMua from "./HangMua";
import LichSu from "./LichSu";


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

class MyTabs extends Component {
  render(){
    return (
    <Tab.Navigator>
      <Tab.Screen name="Bài Đăng" component={BaiDang} />
      <Tab.Screen name="Hàng mua" component={HangMua} />
      <Tab.Screen name="Lịch sử" component={LichSu} />
    </Tab.Navigator>
  );
}
}
export default MyTabs;