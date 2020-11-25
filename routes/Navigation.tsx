import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Country from '../screens/Country'
import Weather from '../screens/Weather'

export default function Navigation() {
    const Stack=createStackNavigator()
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Country" component={Country} />
                <Stack.Screen name="Weather" component={Weather} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
