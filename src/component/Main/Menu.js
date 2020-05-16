import React, { Component } from 'react';

import Main from './Main';
import Shop from './Shop/Shop';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

import MenuLogin from './MenuLogin';
import MenuLogOut from './MenuLogOut';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//             <Drawer.Navigator initialRouteName="Shop">
//                 <Drawer.Screen name="Shop" component={Shop} />
//                 <Drawer.Screen name="Main" component={Main} />
//                 <Drawer.Screen name="Authentication" component={Authentication} />
//                 <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
//                 <Drawer.Screen name="OrderHistory" component={OrderHistory} />
//             </Drawer.Navigator>
//     );
// }

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogedIn: false,
        };
    }

    // gotoAuthentication() {
    //     const { navigation } = this.props;
    //     navigation.push('Authentication');
    // }
    // gotoChangeInfo() {
    //     const { navigation } = this.props;
    //     navigation.push('ChangeInfo');
    // }
    // gotoOrderHistory() {
    //     const { navigation } = this.props;
    //     navigation.push('OrderHistory');
    // }

    render() {
        const loginJSX = (
            <Drawer.Navigator initialRouteName="Shop" drawerContent={props => <MenuLogin {...props} />} >
                <Drawer.Screen name="Shop" component={Shop} />
                <Drawer.Screen name="Main" component={Main} />
                <Drawer.Screen name="Authentication" component={Authentication} />
                <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
                <Drawer.Screen name="OrderHistory" component={OrderHistory} />
            </Drawer.Navigator>
        );
        const logoutJSX = (
            <Drawer.Navigator initialRouteName="Shop" drawerContent={props => <MenuLogOut {...props} />} >
                <Drawer.Screen name="Shop" component={Shop} />
                <Drawer.Screen name="Sign In" component={Main} />
            </Drawer.Navigator>
        );
        const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
        return mainJSX
    }
}

