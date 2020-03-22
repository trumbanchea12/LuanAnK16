import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Block } from 'expo-ui-kit/src'

const Contact = () => {
    return (
        <Block color="#41D5FB" center middle>
            <Text>Contact</Text>
        </Block>
    )
}

export default Contact

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
    }
})
