import React, { Component } from 'react'
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { wrapper, row1, textIput, iconStyle, titleStyle } = styles;
        return (
            <View style={{ wrapper, backgroundColor: '#34B089', padding: 10  }}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen} >
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style = {titleStyle}>Nông sản</Text>
                    <TouchableOpacity>
                        <Image source={icLogo} style={iconStyle} />
                    </TouchableOpacity>
                </View>
                <TextInput 
                    style={textIput}
                    placeholder="Bạn muốn mua gì ?"
                    underlineColorAndroid="transparent" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: { height: height / 8, backgroundColor: '#34B089', padding: 10, justifyContent:'space-around' },
    row1 : { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3  },
    textIput: { height: height/23 , backgroundColor: '#FFF', paddingLeft: 10, paddingVertical: 0  },
    iconStyle : { width: 25, height: 25 },
    titleStyle: { color: '#FFF', fontSize: 20 }
});

/* <TouchableOpacity
                onPress={this.props.onOpen}
                >
                    <Text>Open menu</Text>
                </TouchableOpacity> */