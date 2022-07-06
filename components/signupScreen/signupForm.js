import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'


const SignupForm = ({navigation}) => {
    const signupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'), 
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password has to be at least 8 characters')
    })

  return (
    <View style = {styles.wrapper}>
        <Formik 
            initialValues={{email: '', username: '', password: ''}}
            onSubmit={values => {
                console.log(values)
            }}
            validationSchema={signupFormSchema}
            validationOnMount={true}
        >
            {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                <>
                <View style = {[styles.inputField, 
                    {borderColor: values.email.length < 1 || Validator.validate(values.email) 
                        ? '#444' 
                        : '#ff3237'}
                ]}>
                    <TextInput
                        placeholderTextColor = "#555"
                        placeholder = 'Email'
                        autoCapitalize = 'none'
                        keyboardType = 'email-address'
                        textContextType = 'emailAddress'
                        autoFocus = {true}
                        style = {{color: 'white'}}
                        onChangeText = {handleChange('email')}
                        onBlur = {handleBlur('email')}
                        value = {values.email}
                        />
                </View>
                <View style = {[styles.inputField, 
                    {borderColor: values.username.length < 1 || values.username.length > 6
                        ? '#444' 
                        : '#ff3237'}
                ]}>
                    <TextInput
                        placeholderTextColor = "#555"
                        placeholder = 'Username'
                        autoCapitalize = 'none'
                        textContextType = 'username'
                        autoFocus = {true}
                        style = {{color: 'white'}}
                        onChangeText = {handleChange('username')}
                        onBlur = {handleBlur('username')}
                        value = {values.username}
                        />
                </View>
                <View style = {[styles.inputField, { 
                    borderColor: 1 > values.password.length || values.password.length > 7
                        ? '#444'
                        :'#ff3237'}
                ]}>
                    <TextInput
                        placeholderTextColor = "#555"
                        placeholder = 'Password'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        secureTextEntry = {true}
                        textContentType = 'password'
                        style = {{color: 'white'}}
                        onChangeText = {handleChange('password')}
                        onBlur = {handleBlur('password')}
                        value = {values.password}
                    />
                </View>

                <Pressable 
                    titleSize = {20}   
                    style = {styles.button(isValid)} 
                    onPress = {handleSubmit} 
                >
                    <Text style={{color: 'white'}}>Sign Up</Text>
                </Pressable>

                <View style = {styles.signupContainer}>
                    <Text style = {{color: 'white'}}>Already have an account? </Text>
                    <TouchableOpacity onPress = {() => navigation.push('LoginScreen')}>
                        <Text style = {{color: '#20c9ff'}}>Log in</Text>
                    </TouchableOpacity>
                </View>
                </>
            )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }, 
    inputField: {
        borderRadius: 4,
        padding: 12, 
        backgroundColor: '#222222',
        marginBottom: 10, 
        borderWidth: 1, 
        width: '90%',
        borderColor: '#444',
    },
    button: (isValid) =>({
        backgroundColor: isValid ? '#0096F6' : '#7fcafa',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 38,
        borderRadius: 4,
        width: '90%',
        marginTop: 30
    }),
    signupContainer: {
        flexDirection: 'row', 
        marginTop: 12
    }
})

export default SignupForm