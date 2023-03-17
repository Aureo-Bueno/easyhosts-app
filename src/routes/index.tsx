import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Routes() {
    // const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Login' component={Login} /> 
            </Stack.Navigator> */}
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
