import React from 'react'
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native'
import Constants from 'expo-constants'
function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        flex: 1,
    },
})

export default Screen
