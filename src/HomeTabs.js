import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import TabButton from './components/TabButton';
import Scan from './screens/Scan';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => TabButton(route, color),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          title: '',
          statusBarColor: 'blue',
          headerBackVisible: false,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          headerTransparent: true,
          title: '',
          statusBarColor: 'blue',
          headerBackVisible: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTransparent: true,
          title: '',
          statusBarColor: 'blue',
          headerBackVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
