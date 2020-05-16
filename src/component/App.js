import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';

// component
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Menu from './Main/Menu';
import OrderHistory from './OrderHistory/OrderHistory';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../navigation/RootNavigation';

StatusBar.setHidden(true);

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default class App extends Component {
  render() {
    return (
      <MyStack />
    );
  }
}