import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <View style = {styles.wrapper}>
        <View style = {styles.inputField}>
            <TextInput
                placeholderTextColor = "#555"
                placeholder = 'Phone number, username or email'
                autoCapitalize = 'none'
                keyboardType = 'email-address'
                textContextType = 'emailAddress'
                autoFocus = {true}
                style = {{color: 'white'}}
                />
        </View>
        <View style = {styles.inputField}>
            <TextInput
                placeholderTextColor = "#555"
                placeholder = 'Password'
                autoCapitalize = 'none'
                autoCorrect = {false}
                secureTextEntry = {true}
                textContentType = 'password'
                style = {{color: 'white'}}
            />
        </View>
        <View style = {{width: '90%', alignItems: 'flex-end', marginBottom: 30}}>
            <Text style = {{color: '#20c9ff'}}>Forgot password?</Text>
        </View>

        <Pressable titleSize = {20} style = {styles.button}>
            <Text style={{color: 'white'}}>Log In</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }, 
    inputField:{
        borderRadius: 4,
        padding: 12, 
        backgroundColor: '#222222',
        marginBottom: 10, 
        borderWidth: 1, 
        width: '90%',
        borderColor: '#444'
    },
    button:{
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 38,
        borderRadius: 4,
        width: '90%'
    }
})
export default LoginForm