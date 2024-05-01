/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoTitle from './components/LogoTitle';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            title: '',
            headerRight: props => <LogoTitle {...props} />,
            statusBarColor: 'blue',
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
            statusBarColor: 'blue',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTransparent: true,
            title: '',
            headerRight: props => <LogoTitle {...props} />,
            statusBarColor: 'blue',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
