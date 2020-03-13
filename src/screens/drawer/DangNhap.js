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
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "azure",
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  caption: {
    fontWeight: "bold",
    fontSize: 32,
    color: "green"
  },
  user: {
    paddingLeft: 45,
    paddingRight: 15,
    height: 40,
    width: 300,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15
  },
  pass: {
    paddingLeft: 45,
    paddingRight: 15,
    height: 40,
    width: 300,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15
  },
  button: {
    margin: 15,
    height: 50,
    width: 300,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  buttontext: {
    borderColor: "green",
    color: "green",
    fontSize: 25
  },
  active: {
    backgroundColor: "green"
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 20
  },
  inputcontainer: {
    marginTop: 10,
    marginHorizontal: 20
  },
  btneye: {
    position: "absolute",
    top: 14,
    right: 20
  },
  acc: {
    margin: 10,
    textDecorationLine: "underline",
    color: "blue"
  },
  add: {
    marginTop: 20,
    flexDirection: "row"
  }
});
