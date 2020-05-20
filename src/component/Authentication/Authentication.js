import React, { Component } from 'react';
import { AsyncStorage,View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
// Redux
import { actSignUpRequest } from '../../action/SignUpAction';
import { actSignInRequest } from '../../action/UserAction';
import { connect } from 'react-redux';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

class Authantication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
            info: {
                email: '',
                name: '',
                password: '',
                diachi: '',
                sodienthoai: ''
            },
            repassword: '',
            info_SignIn: {
                email: '',
                password: '',
            },
        }
    }
    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }

    goBackToMain() {
        const { navigation } = this.props;
        navigation.navigate('Menu');
    }

    onSignUp = (info) => {
        console.log("Acticon sign-u");
        this.props.onSignUp(info);
    }

    onSignIn = (info, password_Old) => {
        console.log("Acticon sign-in");
        this.props.onSignIn(info, password_Old);
    }

    clearText(fieldName) {
        this.refs[fieldName].setNativeProps({ text: '' });
    }

    clearAllTextInput() {
        this.clearText('txtEmail');
        this.clearText('txtName');
        this.clearText('txtAddress');
        this.clearText('txtPhone');
        this.clearText('txtPass');
        this.clearText('txtRePass');
    }

    render() {
        const { row1, iconStyle, titleStyle,
            container, controlStyle, singInStyle,
            signUpStyle, inactiveStyle, activeStyle,
            inputStyle, bigButton, buttonText
        } = styles;

        const { signup, user } = this.props;

        const signInJSX = (
            <ScrollView>
                <TextInput style={inputStyle} placeholder="Enter your Email / Username"
                    onChangeText ={(text) => {
                        this.setState({
                            info_SignIn: {
                                ...this.state.info_SignIn,
                                email: text
                            }
                        })
                    }}
                 />
                <TextInput style={inputStyle} placeholder="Enter your password"
                    onChangeText = {(text) => {
                        this.setState({
                            info_SignIn: {
                                ...this.state.info_SignIn,
                                password: text
                            }
                        })
                    }}
                 />
                <TouchableOpacity style={bigButton}
                    onPress ={() => 
                        {
                            this.onSignIn(this.state.info_SignIn, this.state.info_SignIn.password);
                            // if(user.checked == "success"){
                            //     this.props.navigation.navigate('Shop');
                            // }
                            // console.log("Thông báo Đăng nhập : " + JSON.stringify(user.infoUser) + " Check " + user.checked);
                        }
                    }
                >
                    <Text style={buttonText} >SIGN IN NOW</Text>
                </TouchableOpacity>
            </ScrollView>
        );

        const signUpJSX = (
            <ScrollView>
                <TextInput style={inputStyle} ref={'txtEmail'} placeholder="Enter your email"
                    onChangeText={(text) => {
                        this.setState({
                            info: {
                                ...this.state.info,
                                email: text
                            }
                        });
                    }}
                />
                <TextInput style={inputStyle} ref={'txtName'} placeholder="Enter your name"
                    onChangeText={(text) => {
                        this.setState({
                            info: {
                                ...this.state.info,
                                name: text
                            }
                        });
                    }}
                />
                <TextInput style={inputStyle} ref={'txtAddress'} placeholder="Enter your address"
                    onChangeText={(text) => {
                        this.setState({
                            info: {
                                ...this.state.info,
                                diachi: text
                            }
                        });
                    }}
                />
                <TextInput style={inputStyle} ref={'txtPhone'} placeholder="Enter your number phone"
                    onChangeText={(text) => {
                        this.setState({
                            info: {
                                ...this.state.info,
                                sodienthoai: text
                            }
                        });
                    }}
                />
                <TextInput style={inputStyle} ref={'txtPass'} placeholder="Enter your password"
                    onChangeText={(text) => {
                        this.setState({
                            info: {
                                ...this.state.info,
                                password: text
                            }
                        });
                    }}
                />
                <TextInput style={inputStyle} ref={'txtRePass'} placeholder="Re-enter your password"
                    onChangeText={(text) => {
                        this.setState({
                            repassword: text
                        });
                    }}
                />
                <TouchableOpacity style={bigButton} onPress={() => {
                    if (this.state.info.password !== this.state.repassword && this.state.info.password.length < 6) {
                        Alert.alert("Mật khẩu nhập lại không đúng !");
                    }
                    else if (this.state.info.name == '' || this.state.info.email == '' || this.state.info.diachi == '' || this.state.info.sodienthoai == '') {
                        Alert.alert("Vui lòng nhập đủ thông tin !");
                    }
                    else {
                        this.onSignUp(this.state.info);
                        this.clearAllTextInput();
                    }
                }} >
                    <Text style={buttonText} >SIGN UP NOW</Text>
                </TouchableOpacity>
            </ScrollView>
        );

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;

        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)} >
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Nông sản</Text>
                    <TouchableOpacity>
                        <Image source={icLogo} style={iconStyle} />
                    </TouchableOpacity>
                </View>
                {mainJSX}
                <View style={controlStyle} >
                    <TouchableOpacity style={singInStyle} onPress={this.signIn.bind(this)} >
                        <Text style={isSignIn ? activeStyle : inactiveStyle} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)} >
                        <Text style={!isSignIn ? activeStyle : inactiveStyle} >SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        signup: state.signup,
        user: state.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (info) => { dispatch(actSignUpRequest(info)) },
        onSignIn: (info, password_Old) => {dispatch(actSignInRequest(info, password_Old)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authantication);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between',
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3, alignItems: 'center' },
    iconStyle: { width: 30, height: 30 },
    titleStyle: { color: '#FFF', fontSize: 30 },
    controlStyle: {
        flexDirection: 'row',

    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EBA77'
    },
    singInStyle: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1,
    },
    signUpStyle: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1,
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {

        color: '#FFF',
        fontWeight: '400'
    },
});