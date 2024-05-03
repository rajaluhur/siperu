/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogoTitle from './components/LogoTitle';
import Login from './screens/Login';
import Register from './screens/Register';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTransparent: true,
            title: '',
            headerRight: props => <LogoTitle {...props} />,
            statusBarHidden: true,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTransparent: true,
            title: '',
            headerRight: props => <LogoTitle {...props} />,
            statusBarHidden: true,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            headerTransparent: true,
            title: '',
            statusBarHidden: true,
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
