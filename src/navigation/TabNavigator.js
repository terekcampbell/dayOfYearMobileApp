import React from 'react';
import DayOfYear from "../screens/DayOfYear";
import WeekOfYear from "../screens/WeekOfYear";
import PickADay from "../screens/PickADay";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator style={{marginTop: 10}} initialRouteName="Day">
                <Tab.Screen name="Pick" component={PickADay} />
                <Tab.Screen name="Day" component={DayOfYear} />
                <Tab.Screen name="Week" component={WeekOfYear} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}