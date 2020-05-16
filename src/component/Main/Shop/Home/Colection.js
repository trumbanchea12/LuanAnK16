import React, { Component } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import bannerImage from '../../../../media/temp/banner.jpg'

const { height, width } = Dimensions.get('window');

export default class Colection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style= { wrapper } >
                <View style={{ flex: 1, justifyContent:'center' }}>
                    <Text style={textStyle}>Colection</Text>
                </View>
                <TouchableOpacity  style={{flex: 3}}>
                <Image source={bannerImage} style={imageStyle} />
                </TouchableOpacity>
            </View>
        )
    }
}

const imageWidth = width - 30;
const imageHeight = (imageWidth / 933) * 465

const styles = StyleSheet.create({
    wrapper:{
        height: height*0.35,
        backgroundColor: '#FFF',
        margin: 5,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle:{
        fontSize: 25,
        color: '#AFAEAF'
    },  
    imageStyle: {
        height: imageHeight, 
        width: imageWidth,

    }
});