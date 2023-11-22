import React from 'react'
import { StatusBar } from 'react-native'
import { AppBar } from '@react-native-material/core'
import Constants from 'expo-constants'
import { Platform, StyleSheet } from 'react-native'
import * as Device from 'expo-device'
import colors from '../config/colors'

function MyAppBar({ title, subtitle, leading, trailing, titleStyle }) {
    return (
        <>
            <StatusBar backgroundColor={colors.blue} />
            <AppBar
                subtitle={subtitle}
                leading={leading}
                style={
                    {
                        // paddingTop: Device.isDevice
                        //     ? Platform.OS === 'ios'
                        //         ? Constants.statusBarHeight / 1.4
                        //         : 0
                        //     : Constants.statusBarHeight / 1.4,
                    }
                }
                color={colors.blue}
                title={title || `Tap card reader`}
                titleStyle={[styles.titleStyle, titleStyle]}
                centerTitle={true}
                trailing={trailing}
            />
        </>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white',
        textAlign: 'center',
        textDecorationStyle: 'solid',
        textDecorationColor: 'white',
        textTransform: 'uppercase',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
    },
})

export default MyAppBar
