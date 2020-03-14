import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Header } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';


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
        console.log(hinhanh);
        return (
            <View>
                <FlatList
                    data={hinhanh}
                    renderItem={({ item }) =>
                        <View>
                            <Image source={{ uri: item.src }} 
                                    style={{width: 50, height: 50}}
                            />
                            <Text>{item.src}</Text>
                        </View>
                    }
                    keyExtractor={item => item.position.toString()}
                />
            </View>
        )
    }
}
