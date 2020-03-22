import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class itemHang extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style = {{paddingTop: 35, fontSize: 10}}>Mã SP</Text>
                    <Text style={styles.stt} >{this.props.id}</Text>
                </View>
                <Image
                    source={{ uri: this.props.img }}
                    style={{ height: 100, width: 100, margin: 5, resizeMode: 'contain' }}

                />
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        paddingTop: 5
                    }}>
                    <Text style={styles.title} >{this.props.name}</Text>
                    <View
                        style ={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingTop: 8
                        }}
                    >
                        <Text>Giá ban đầu: </Text>
                        <Text style = {{textDecorationLine: 'line-through'}}>{this.props.price}</Text>
                    </View>
                    <View
                        style ={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: -6,
                            
                        }}
                    >
                        <Text style = {{color: 'red', fontSize: 20}}>
                        Giá Sale : </Text>
                        <Text style = {{fontSize: 20}}>{this.props.pricesale}</Text>
                    </View>
                    <Text>Số hàng còn lại: {this.props.stock}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 30,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 7,
        marginLeft: 5,
        marginRight: 5
    },
    title: {
        textTransform: 'uppercase',
        padding: 1,
        fontSize: 15,
    },
    stt: {
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: -30
    }
})