import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MyOnboarding from '../screens/onboarding';  
import Home from '../screens/home';
import Post from "../screens/post";

const Stack = createStackNavigator();

const OnBoardingStack = () => {
    return(
        <Stack.Navigator>
    <Stack.Screen options={{headerShown:false,}} name="Intro" component={MyOnboarding} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Post" component={Post} />
  </Stack.Navigator>
    )
}
export default OnBoardingStack;