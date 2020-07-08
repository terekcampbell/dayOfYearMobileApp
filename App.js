import React, {useEffect} from "react";
import { createTopTabNavigator } from 'react-navigation';
import TabNavigator from "./src/navigation/TabNavigator";
import SplashScreen from 'react-native-splash-screen';


export default function App() {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <TabNavigator/>
    );
}