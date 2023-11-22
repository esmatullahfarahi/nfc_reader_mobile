import React, { useState, useEffect, useRef } from 'react'
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native'
import MyAppBar from '../components/MyAppBar'
import Screen from '../components/Screen'

export default function HomeScreen({ navigation }) {
    const [showHint, setShowHint] = useState(false)

    const scanAndSubmitCode = () => {
        // setShowHint(true)
        // const timeoutId = setTimeout(() => {
        //     setShowHint(false)
        //     navigation.navigate('RequestScreen')
        // }, 6000)

        return () => clearTimeout(timeoutId)
    }

    const scaleValue = useRef(new Animated.Value(1)).current

    useEffect(() => {
        if (showHint) {
            startAnimation()
        } else {
            resetAnimation()
        }
    }, [showHint])

    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 0.7,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ])
        ).start()
    }

    const resetAnimation = () => {
        scaleValue.setValue(1)
    }

    return (
        <Screen style={styles.container}>
            <MyAppBar title='Ebizframe' subtitle='CARD Reader' />
            <View style={styles.body}>
                <Text style={styles.centeredText}>Scan card to continue</Text>
                <Text>
                    Payment using NFC Tag is a fairly new concept in India.
                    Hence, we added a small User Education right before the
                    self-activation flow.
                </Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={require('../../assets/images/melcom.png')} style={styles.logoImage} />
                        <Text style={styles.logoText}>Discount Card</Text>
                    </View>
                    <Image source={require('../../assets/images/card/chip.png')} style={styles.chip} />
                </View>

                <View style={styles.cardDetails}>
                    <View style={styles.nameNumber}>
                        <Text style={styles.cardName}>Card Number</Text>
                        <Text style={styles.cardNumber}>8050 5040 2030 3020</Text>
                        <Text style={styles.name}>Test Card Name</Text>
                    </View>
                    <View style={styles.validDate}>
                        <Text style={styles.label}>Valid To</Text>
                        <Text style={styles.label}t>05/28</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.activateButton}
                    onPress={scanAndSubmitCode}
                >
                    <Text style={styles.activateButtonText}>Scan Now</Text>
                </TouchableOpacity>
            </View>

            {showHint && (
                <View style={styles.scanningContainer}>
                    <Animated.View
                        style={[
                            styles.circle,
                            {
                                transform: [{ scale: scaleValue }],
                            },
                        ]}
                    />
                </View>
            )}
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    body: {
        padding: 20,
    },

    centeredText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1,
        marginBottom: 10,
    },

    header: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginTop: -45,
    },

    cardContainer: {
        position: 'relative',
        backgroundColor: 'black', 
        padding: 15,
        borderRadius: 20,
        maxWidth: 350,
        width: '100%',
        height: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        elevation: 8,
    },

    logo: {
        flexDirection: 'row',
        alignItems: 'center', 
    },

    logoImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain', 
        marginRight: 10,
    },

    logoText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#fff',
    },

    chip: {
        width: 40,
        resizeMode: 'contain', 
    },

    cardName: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '400',
    },

    cardNumber: {
        marginTop: 4,
        fontSize: 13,
        letterSpacing: 1,
        color: '#fff',
    },

    name: {
        marginTop: 20,
        color: '#fff',
        fontSize: 13,
    },

    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    validDate: {
        color: '#fff',
        fontSize: 10,
    },

    label: {
        color: '#fff',
        fontSize: 12,
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    activateButton: {
        backgroundColor: '#0093E9',
        padding: 15,
        borderRadius: 5,
        color: 'white !important',
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
    },

    activateButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    scanningContainer: {
        alignItems: 'center',
        marginTop: 0,
    },

    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#0093E9',
        marginBottom: 10,
    },
})
