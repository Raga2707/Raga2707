import React from 'react';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login'
import Signup from './../screens/Signup'
import Welcome from './../screens/Welcome';

const Stack = createStackNavigator();
 
const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                            screenOptions = {{
                                headerStyle: { backgroundColor: 'transparent' },
                                headerTintColor: tertiary,
                                headerTransparent: true,
                                headerLeftContainerStyle: { padding:20 }
            
                            }}
                            initialRouteName = "Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;