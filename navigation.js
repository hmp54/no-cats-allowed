import React, {useState} from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ProfileScreen from './screens/ProfileScreen'
import {Divider} from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {HomeStack} from './HomeStack';

const BOTTOM_TAB_ICONS = [
    {
        name: 'HomeScreen',
        active: require('./assets/home-active.png'),
        inactive: require('./assets/home.png') 
    },
    {
        name: 'SearchScreen',
        active: require('./assets/search-active.png'),
        inactive: require('./assets/search.png') 
    },
    {
        name: 'ProfileScreen',
        active: require('./assets/user-active.png'),
        inactive: require('./assets/user.png')
    },
]


const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,  
}


export const SignedInStack = () =>( 
    <NavigationContainer>
        <Tab.Navigator 
            initialRouteName='HomeScreen'
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveBackgroundColor: 'black',
                tabBarInactiveBackgroundColor: 'black',
                tabBarStyle: {
                    paddingBottom: 0,
                },
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen 
                name = 'HomeStack' 
                component={HomeStack} 
            />
            <Tab.Screen name = 'ProfileScreen' component = {ProfileScreen}/>
        </Tab.Navigator>        
    </NavigationContainer>
) 

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName = 'SignupScreen' 
            screenOptions = {screenOptions}
        >
            <Stack.Screen name = 'LoginScreen' component = {LoginScreen}/>
            <Stack.Screen name = 'SignupScreen' component = {SignupScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)


const styles = StyleSheet.create({
    icon:{
        width: 25,
        height: 25
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        marginTop: 15,
        marginBottom: 30
    },
    wrapper:{
        position: 'absolute',
        backgroundColor: 'black',
        width: '100%',
        bottom: '0%',
       zIndex: 999
    }
})