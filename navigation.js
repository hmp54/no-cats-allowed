import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'

{/* This code basically creates a stack of different screens, like the HomeScreen and New Post Screen, and allows up to pass all of them through our App.js as one piece (hence the name Stack) 

We have a stack of navigation pages for when you are signed into the app, and another stack of pages for when you're not signed in. 
*/}


const Stack = createStackNavigator()
const screenOptions = {
    headerShown: false,  
}

const SignedInStack = () =>( 
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName = 'LoginScreen' 
            screenOptions = {screenOptions}
        >
            <Stack.Screen name = 'HomeScreen' component={HomeScreen}/>
            <Stack.Screen name = 'NewPostScreen' component = {NewPostScreen}/>
            <Stack.Screen name = 'LoginScreen' component = {LoginScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
)


export default SignedInStack