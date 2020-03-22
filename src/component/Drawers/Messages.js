import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Block } from 'expo-ui-kit';

const Messages = () => {
    return (
        <Block color="#FFC46B" center middle>
            <Text h2 white>Messages</Text>
        </Block>
    )
}

export default Messages

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
    }
})
