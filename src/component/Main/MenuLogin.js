import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actSignOut } from '../../action/UserAction';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Logo from '../../media/temp/ava.png';


const url = 'http://vaomua.club/public/user/image/images/'; // hinh anh

function MenuLogin(props) {
    
        onSignOut = () =>{
            this.props.onSignOut();
        }

        const user  = props.user.infoUser;

        return (
            <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{ uri : user.avatar == "null" ? Logo : `${url}${user.avatar}`}}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{user.name}</Title>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label="OrderHistory"
                            onPress={() => {props.navigation.navigate('OrderHistory')}}
                        />
                        <DrawerItem 
                            label="ChangeInfo"
                            onPress={() => {props.navigation.navigate('ChangeInfo')}}
                        />
                        <DrawerItem 
                            label="Sign Out"
                            onPress={() => {props.onSignOut()}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
        );
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}


const mapDispatchTopProps = dispatch => {
    return {
        onSignOut : () => { dispatch(actSignOut()) },
    }
}

export default connect(mapStateToProps, mapDispatchTopProps )(MenuLogin);

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      justifyContent: 'space-between',
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });