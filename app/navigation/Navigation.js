import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Navigation = () => {
    const Stack = createNativeStackNavigator()
    const screenOptions = {
        headerShown: false,
        headerMode: 'none',
    }

    return (
        <Stack.Navigator
            initialRouteName='SplashScreen'
            defaultScreenOptions={{ headerMode: 'none' }}
        >
            <Stack.Screen
                name='SplashScreen'
                component={SplashScreen}
                options={screenOptions}
            />
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={screenOptions}
            />

            <Stack.Screen
                name='RequestScreen'
                component={RequestScreen}
                options={screenOptions}
            />
            
        </Stack.Navigator>
    )
}

export default Navigation