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


/*import BottomTabs from './components/home/BottomTabs'*/ 

{/* This code creates a stack of different screens, like the HomeScreen and New Post Screen, and allows us to pass all of them through our App.js as one piece (hence the name Stack) 

We have a stack of navigation pages for when you are signed into the app, and another stack of pages for when you're not signed in. 
*/}


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

const Stack = createStackNavigator()
const screenOptions = {
    headerShown: false,  
}

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('HomeScreen')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress = {() => setActiveTab(icon.name)}>
            <Image source = {icon.active} style= {styles.icon}/>
        </TouchableOpacity>
    )

    return (
        <View style = {styles.wrapper}>
            <Divider width = {1} orientation = 'vertical'/>
            <View style = {styles.iconContainer}>
                <TouchableOpacity>
                    <Image
                        source = {BOTTOM_TAB_ICONS[0].inactive}
                        style = {styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source = {BOTTOM_TAB_ICONS[1].inactive}
                        style = {styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source = {BOTTOM_TAB_ICONS[2].inactive}
                        style = {styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const SignedInStack = () =>( 
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName = 'HomeScreen' 
            screenOptions = {screenOptions}
        >
            <Stack.Screen name = 'HomeScreen' component={HomeScreen}/>
            <Stack.Screen name = 'NewPostScreen' component = {NewPostScreen}/>
            <Stack.Screen name = 'ProfileScreen' component = {ProfileScreen}/>
        </Stack.Navigator>
        <BottomTabs/>
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