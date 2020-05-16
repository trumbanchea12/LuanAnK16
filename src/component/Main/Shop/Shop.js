import React, { Component, ReactElement } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import logoHome from '../../../media/appIcon/home.png'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';

const Tab = createBottomTabNavigator();

// =============== Hiển thị số lượng ở bottomMenu =============
function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function CartIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} />;
}

// =============== END  Hiển thị số lượng ở bottomMenu =============

class Shop extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Cart') {
            return (
              <CartIconWithBadge
                name={
                  focused
                    ? 'ios-cart'
                    : 'ios-cart'
                }
                size={size}
                color={color}
                badgeCount={cart.length}
              />
            );
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'ios-contact' : 'ios-contact';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#34B089',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
    )
  }

}
const mapStateToProps = state => {
    return {
      cart : state.cart
    }
} 

export default connect(mapStateToProps, null)(Shop);