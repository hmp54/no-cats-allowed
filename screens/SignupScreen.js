import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'
import SignupForm from '../components/signupScreen/signupForm'

const BIG_LOGO = require('../assets/no-pets.png')
const LOGO = require('../assets/logo.png')

const SignupScreen = ({navigation}) => (
    <View style = {styles.container}>
        <View style = {styles.logoContainer}>
            <Image source = {BIG_LOGO} style = {styles.bigLogo}/> 
            <Image source = {LOGO} style = {styles.logo}/>
        </View>
        <SignupForm navigation = {navigation}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1
    },
    bigLogo:{
        width: 100,
        height: 100, 
        resizeMode: 'contain'
    },
    logo:{
        resizeMode: 'contain',
        height: 60,
        width: 300
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 150,
    }
})

export default SignupScreen