<<<<<<< HEAD:src/screens/drawer/screen3.js
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
=======
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

export default class DangNhap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taikhoan: "",
      matkhau: "",
      dk: "",
      showPass: true,
      press: false
    };
  }
  showPass = () => {
    if (this.state.press == false)
      this.setState({ showPass: false, press: true });
    else this.setState({ showPass: true, press: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.caption}>Goods Farming</Text>

        <View style={styles.inputcontainer}>
          <IonIcon
            style={styles.icon}
            name="ios-person"
            size={16}
            color="blue"
          />
          <TextInput
            style={styles.user}
            placeholder="Username"
            onChangeText={taikhoan => this.setState({ taikhoan })}
          ></TextInput>
        </View>
        <View style={styles.inputcontainer}>
          <IonIcon style={styles.icon} name="ios-lock" size={16} color="blue" />
          <TextInput
            style={styles.pass}
            placeholder="Password"
            secureTextEntry={this.state.showPass}
            onChangeText={matkhau => this.setState({ matkhau })}
          ></TextInput>

          <TouchableOpacity
            style={styles.btneye}
            onPress={this.showPass.bind(this)}
          >
            <IonIcon
              name={this.state.press == false ? "ios-eye" : "ios-eye-off"}
              size={16}
              color="blue"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> console.log(this.state.taikhoan,this.state.matkhau)}
        >
          <Text style={styles.buttontext} >đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.add}>
          <TouchableOpacity>
            <Text style={styles.acc}>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DangKy')}>
            <Text style={styles.acc}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
>>>>>>> 7dc81d578a56ca88929850f6f1e2dbc2b677ec3d:src/screens/drawer/DangNhap.js
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
