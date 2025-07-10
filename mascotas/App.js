import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DogsScreen from './screens/Dogs';
import CatsScreen from './screens/Cats';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Dogs') {
              iconName = 'paw';
            } else if (route.name === 'Cats') {
              iconName = 'logo-octocat';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff6f00',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Dogs" component={DogsScreen} />
        <Tab.Screen name="Cats" component={CatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

