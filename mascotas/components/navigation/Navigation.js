import React from'react';
import Dogs  from '../../screens/Dogs';
import Cats from '../../screens/Cats';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab=createBottomTabNavigator();
export default function Navigation (){
  return(
    <Tab.Navigator>
    <Tab.Screen name= "dogs" component={Dogs} options={{title:'Dogs'}}/>
    <Tab.Screen name="cats" component={Cats} options={{title:'Cats'}}/>
    </Tab.Navigator>
  );
}
