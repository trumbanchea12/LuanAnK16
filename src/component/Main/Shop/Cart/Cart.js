import React, { Component } from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// compent
import CardView from './CardView';
import ProductDetail from '../ProductDetail/ProductDetail';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode ='none'>
      <Stack.Screen name="CardView" component={CardView} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}


export default class Card extends Component {

    openMenu() {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <MyStack />
        )
    }
}
