import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

export default class ListProduct extends Component {
    goBack() {
        const { navigation } = this.props;
        navigation.pop();
    }
    gotoDetail() {
        const { navigation } = this.props;
        navigation.push('ProductDetail');
    }
    render() {
        const { container, header, wrapper, backStyle, titleStye,
            productContainer, productInfo, productImage, lastRowInfo, txtName, txtPrice, txtMaterial, txtColor, txtShowDetail }
            = styles
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)} >
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStye}>Dành cho lúa</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName} >Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName} >Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName} >Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName} >Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName} >Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 6
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
    },
    wrapper: {
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#D6D6D6',
    },
    titleStye: {
        
        color: '#34B089',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        
        color: '#34B089',
    },
    txtMaterial: {
        
    },
    txtColor: {
        
    },
    txtShowDetail: {
        
        color: '#34B089',
        fontSize: 11
    }

});