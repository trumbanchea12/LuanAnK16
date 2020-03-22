import React from "react";
import { Image, StyleSheet, Linking } from "react-native";
import { Block, Text, Button } from "expo-ui-kit";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import {LinearGradient} from "expo-linear-gradient";

//import screens
import Home from "./Home";
import Messages from "./Messages";
import Contact from "./Contact";
import Animated from "react-native-reanimated";
import StackLogin from "../Login/StackLogin";

// [x] create stacks for each screen
//[x] add header button to show the drawer

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button
              transparent
              padding
              marginHorizontal
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="ios-menu" size={20} />
            </Button>
          )
        }}
      >
        <Stack.Screen name="Homescreen" component={Home} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="log" component={StackLogin} />
      </Stack.Navigator>
    </Animated.View>
  );
};

// [x] Build custom Drawer menu
// [] Style Drawer menu
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1}}>
      <Block>
        {/* add avatar */}
        <Block flex={0.4} margin={20} bottom>
          <Image
            source={require("../../images/profile_logo.png")}

            resizeMode="center"
            style={{ borderRadius: 60 , height: 60 , width: 60}}
          />
          <Text white title marginTop="2x">Nông sản</Text>
          <Text white size={9} marginTop>Contact with us ....</Text>
        </Block>
        <Block>
        <DrawerItem
          label="Home"
          labelStyle={{color:"white", marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Homescreen")}
          icon={() => <Ionicons name="ios-card" size={16} color="white" />}
        />
        <DrawerItem
          label="Messages"
          labelStyle={{color:"white", marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Messages")}
          icon={() => <Ionicons name="ios-chatboxes" size={16} color="white" />}
        />
        <DrawerItem
          label="Contact"
          labelStyle={{color:"white", marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Contact")}
          icon={() => <Ionicons name="ios-clipboard" size={16} color="white" />}
        />
       
        <DrawerItem
          label="Đăng nhập/đăng ký"
          labelStyle={{color:"white", marginLeft: -16 }}
          onPress={() => props.navigation.navigate("log")}
          icon={() => <Ionicons name="ios-book" size={16} color="white" />}
        />
        </Block>
        <Block noflex top>
        <DrawerItem
          label="Logout"
          labelStyle={{color:"white", marginLeft: -16 }}
          onPress={() => alert("Are you sure to logout?")}
          icon={() => <Ionicons name="ios-log-out" size={16} color="white" />}
        />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

const DrawerScreen = () => {
  const [progress, setProgres] = React.useState(new Animated.Value(0));
  // create animation for screen scale
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });
  // animate the borderRadius of the scene screen
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10]
  });

  const screensStyles = {borderRadius, transform: [{ scale }] };
// them gradient background 

  return (
    <LinearGradient style={{ flex: 1}} colors={["blue","pink"]}>
        <Drawer.Navigator
        // the darwer -> screen animated chieu nhu slide
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Dashboard"
        drawerStyle={{ width: "50%" , backgroundColor: "transparent"}}
        drawerContentOptions={{
            activeBackgroundColor: "transparent",
            activeTintColor: "green",
            inactiveTintColor: "green"
        }}
        // set the scene background to transparent
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={props => {
            setProgres(props.progress);
            return <CustomDrawerContent {...props} />;
        }}
        >
        <Drawer.Screen name="Screens">
            {props => <Screens {...props} style={screensStyles} />}
        </Drawer.Screen>
        </Drawer.Navigator>
    </LinearGradient>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});
