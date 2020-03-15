import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Header } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';


export default class showHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSanPham: [],
        }
    }
    render() {

        const { route } = this.props;
        const { hinhanh } = route.params;
        const { mieutasp } = route.params;
        console.log(hinhanh);
        return (
            <ScrollView style={styles.container}>
                <WebView
                    originWhitelist={['*']}
                    source={{ html: mieutasp }}
                    style={{ height: 250 }}
                />
                <FlatList
                    data={hinhanh}
                    renderItem={({ item }) =>
                        <View style={styles.hinhanh}>
                            <Image source={{ uri: item.src }}
                                style={{ width: 300, height: 300, marginTop: 8 }}
                            />
                        </View>
                    }
                    keyExtractor={item => item.position.toString()}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    hinhanh: {
        flex: 1,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
    }
})