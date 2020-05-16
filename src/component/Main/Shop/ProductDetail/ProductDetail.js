import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import HTML from 'react-native-render-html';
import { actAddToCart } from '../../../../action/CartAtion';
import { connect } from 'react-redux';

import img1 from '../../../../media/temp/sp5.jpeg';
import img2 from '../../../../media/temp/sp4.jpeg';

const back = require('../../../../media/appIcon/back.png');
const cart = require('../../../../media/appIcon/cartfull.png');

const url = 'http://vaomua.club/public/user/image/images/';

class ProductDetail extends Component {
    goBack() {
        const { navigation } = this.props;
        navigation.pop();
    }
    onAddToCart = (product) => {
        console.log('ProductDetail redux : ')
        this.props.onAddToCart(product);
    }
    render() {
        const { route } = this.props;

        const { product } = route.params;

        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        return (
            <View style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onAddToCart(product)}>
                            <Image style={cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                                <Image source={{ uri: `${url}${product.sanpham_anh}` }} style={productImageStyle} />
                        </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{product.sanpham_ten.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{(product.gia_tien).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</Text>
                            </Text>
                            <Text style={txtMaterial}>Khuyến mãi: {product.phan_tram_km} %</Text>
                        </View>
                        <ScrollView style={descContainer}>
                            {/* <Text style={descStyle}>{product.sanpham_mo_ta}</Text> */}

                            <HTML html={product.sanpham_mo_ta} imagesMaxWidth={Dimensions.get('window').width} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                {/* <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>{color}</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'black'.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                                </View> */}
                            </View>
                        </ScrollView>
                    </View>
                </View>

            </View>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (product) => dispatch(actAddToCart(product, 1)),
    }
}
export default connect(null, mapDispatchToProps)(ProductDetail);

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {

        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {

        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {

        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',

    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',

    }
});