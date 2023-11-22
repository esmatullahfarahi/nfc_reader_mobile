import React, { useState, useEffect } from 'react'
import { useRef } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Easing,
    StatusBar,
} from 'react-native'

const SplashScreen = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    const animDuration = 2000


    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: animDuration,
            useNativeDriver: true,
        }).start()
        return
    }
   
    useEffect(() => {
        if (Platform.OS === 'android')
            StatusBar.setBackgroundColor("#ccc")
            fadeIn()
            setTimeout(() => {
            navigation.replace('HomeScreen')
        }, animDuration)
    }, [])

    return (
        <Animated.View
            style={{
                opacity: fadeAnim,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image
                style={{ width: '90%' }}
                source={require('../../assets/images/ebizframe.png')}
                resizeMode='contain'
            />
        </Animated.View>
    )
}

export default SplashScreen