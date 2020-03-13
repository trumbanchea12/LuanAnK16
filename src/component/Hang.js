import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SearchBar, Header } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import WooCommerceAPI from 'react-native-woocommerce-api';



export default class Hang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree",
            ],

        }
    }

    // search bar
    updateSearch = search => {
        this.setState({ search });
        console.log(this.state.search)
    };


    render() {
        

        const { search } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <SearchBar
                        placeholder="Tìm kiếm..."
                        onChangeText={this.updateSearch}
                        value={search}
                        lightTheme
                        autoCorrect={false}
                        containerStyle={{width: "80%",  }}
                    />
                    <View style = { styles.shopcart}>
                    <TouchableOpacity
                        onPress = {() => {
                            console.log("Giỏ hàng")
                        }}
                    >
                    <Icon
                        underlayColor
                        name='ios-cart'
                        type='ionicon'
                        color='#f1582e'
                        size = {30}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => {
                            console.log("Tin nhắn")
                        }}
                    >
                    <Icon
                        underlayColor='none'
                        name='ios-chatboxes'
                        type='ionicon'
                        color='#f1582e'
                        size = {30}
                        iconStyle = {styles.icon}
                    />  
                    </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                <SliderBox images={this.state.images}
                    sliderBoxHeight={150}
                    onCurrentImagePressed={
                        index => console.warn(`image ${index} pressed`)
                    }
                    dotColor="#FFFFFF"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 19,
        flex: 1
    },
    header: {
        flexDirection: 'row'
    },
    searchbar: {
        width: '80%'
    },
    shopcart :{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 6,
        backgroundColor: '#e1e5ea'
    },
    icon:{
        paddingLeft: 13
    }
});