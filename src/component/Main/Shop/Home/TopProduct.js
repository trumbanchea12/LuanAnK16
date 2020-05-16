import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { actFetchTopProductsRequest } from './../../../../action/TopProductAction';
import callApi from './../../../../network/apiCaller';
// import sp1 from '../../../../media/temp/sp1.jpeg';
// import sp2 from '../../../../media/temp/sp2.jpeg';
// import sp3 from '../../../../media/temp/sp3.jpeg';
// import sp4 from '../../../../media/temp/sp4.jpeg';

const url = 'http://vaomua.club/public/user/image/images/';

class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        }
    }
    componentDidMount() {
        this.props.fetchTopProducts();
    }
    render() {
        const { topproducts } = this.props;
        const { navigation } = this.props;


        const { container, titleContainer,
            title, body, productContainer, productImage,
            productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    {topproducts.map(e => (
                        <TouchableOpacity style={productContainer}
                            onPress={() => {
                                navigation.navigate('ProductDetail', {
                                    product: e,

                                })
                            }}
                            key={e.id}>
                            <Image source={{ uri: `${url}${e.sanpham_anh}` }} style={productImage} />
                            <Text style={productName}>{e.sanpham_ten.toUpperCase()}</Text>
                            <Text style={productPrice}>{(e.gia_tien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))}VNĐ</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        topproducts: state.topproducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopProducts: () => dispatch(actFetchTopProductsRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProduct);

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 425;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 5,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingBottom: 10,

    },
    productImage: {
        width: productWidth,
        height: productImageHeight,

    },
    productName: {
        paddingLeft: 10,

        color: '#D3D3CF',
        fontWeight: '500',
        marginTop: 5

    },
    productPrice: {
        paddingLeft: 10,

        color: '#662F90',
    }

});

{/* <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
    <Image source={sp1} style={productImage} />
    <Text style={productName}>PRODUCT NAME</Text>
    <Text style={productPrice}>400$</Text>
</TouchableOpacity>
    <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
        <Image source={sp2} style={productImage} />
        <Text style={productName}>PRODUCT NAME</Text>
        <Text style={productPrice}>250$</Text>
    </TouchableOpacity>
    <View style={{ height: 10, width }} />
    <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
        <Image source={sp3} style={productImage} />
        <Text style={productName}>PRODUCT NAME</Text>
        <Text style={productPrice}>250$</Text>
    </TouchableOpacity>
    <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
        <Image source={sp4} style={productImage} />
        <Text style={productName}>PRODUCT NAME</Text>
        <Text style={productPrice}>250$</Text>
    </TouchableOpacity> */}