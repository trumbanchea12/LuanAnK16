import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
export default class screen3 extends Component {
    constructor(props){
        super(props);
        this.state =
        {
        taikhoan:'',
        matkhau:'', 
        dk:'',   
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>login</Text>
                <TextInput style={styles.user} onChangeText={ (taikhoan)=> this.setState({taikhoan}) } >
                </TextInput>
                <TextInput style={styles.pass} onChangeText={ (matkhau)=> this.setState({matkhau}) }>
                </TextInput>
                <TouchableOpacity onPress={() => {} }><Text style={styles.buttontext}>đăng ký</Text></TouchableOpacity>
            </View>
          
        )
    }
}
const styles= StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    user:{
        margin: 15,
        height: 40,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    } ,
    pass:{
        height: 40,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    },
    button:{
        height: 40,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    },
    buttontext:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
