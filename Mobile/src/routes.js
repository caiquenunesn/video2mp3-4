import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Convert from './pages/Convert';
import Info from './pages/Info';


export default function Routes(){
    const App = createStackNavigator();
    return(
        <NavigationContainer>
            <App.Navigator screenOptions={{ headerShown: false}}>
                <App.Screen name="Convert" component={Convert}/>
                <App.Screen name="Info" component={Info}/>
            </App.Navigator>
        </NavigationContainer>
    );
}