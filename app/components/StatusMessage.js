import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import { StyleSheet, Text, View } from 'react-native'

const StatusMessage = ({ message, containerStyle, textStyle }) => {
    const { isConnected, type } = useNetInfo()
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.txt, textStyle]}>{message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        color: 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    txt: {
        padding: 1,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff',
    },
})

export default StatusMessage
