import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './app/navigation/Navigation.js'
import { useEffect } from 'react'
import SocketComponent from './app/components/SocketComponent'

const MainApp = () => {
    return <Navigation />
}

export default function App() {
    return (
        <NavigationContainer>
            <MainApp />
            <SocketComponent />
        </NavigationContainer>
    )
}
