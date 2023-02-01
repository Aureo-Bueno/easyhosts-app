import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
