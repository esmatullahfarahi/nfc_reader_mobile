import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button } from 'react-native'

const SocketComponent = () => {
    const [socketOpen, setSocketOpen] = useState(false)
    const ws = useRef(null)

    // PING TEST
    useEffect(() => {
        const startTime = Date.now()
        fetch('http://10.0.2.2:3000/read-card')
            .then((response) => {
                const endTime = Date.now()
                const duration = endTime - startTime

                console.warn('Server response time:', duration, 'ms')
                console.warn('Server response:', response)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    useEffect(() => {
        const url = 'ws://10.0.2.2:3000/sample-card-number-ws'
        console.log('WebSocket URL:', url)

        ws.current = new WebSocket(url)

        ws.current.onopen = () => {
            console.log('Connected to WebSocket server')
            setSocketOpen(true)
        }

        ws.current.onmessage = (event) => {
            console.log('Received message from server:', event.data)
            // Handle received message (e.g., update state with the card number)
        }
        ws.current.onerror = (error) => {
            console.error('WebSocket Error:', error)
            // Handle the error as needed
        }

        ws.current.onclose = () => {
            console.log('Disconnected from WebSocket server')
            setSocketOpen(false)
        }

        return () => {
            if (ws.current) {
                ws.current.close()
            }
        }
    }, [])

    const requestSampleCardNumber = () => {
        // Check if the WebSocket is open before sending a message
        if (
            socketOpen &&
            ws.current &&
            ws.current.readyState === WebSocket.OPEN
        ) {
            ws.current.send(
                JSON.stringify({
                    deviceId: '55',
                    deviceName: 'MyDevice',
                })
            )
        } else {
            console.log('WebSocket connection not open.')
        }
    }

    return (
        <View>
            <Text>WebSocket Component</Text>
            <Button
                title='Request Sample Card Number'
                onPress={requestSampleCardNumber}
            />
            {/* Other components or UI */}
        </View>
    )
}

export default SocketComponent
