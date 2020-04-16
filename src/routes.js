import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login/index';
import Home from './pages/Home/index';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={Login}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}