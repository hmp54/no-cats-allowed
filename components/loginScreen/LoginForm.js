import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase, auth } from '../../firebase'


const LoginForm = ({navigation}) => {
    //Formik schema
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'), 
        password: Yup.string()
            .required()
            .min(8, 'Your password has to be at least 8 characters')
    })

    const onLogin = async (email, password) =>{
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
        }).catch((error) =>{
            Alert.alert(error.message)
        });
    }

  return (
    <View style = {styles.wrapper}>
        <Formik 
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
                onLogin(values.email, values.password)
            }}
            validationSchema={LoginFormSchema}
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
                        placeholder = 'Phone number, username or email'
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
                <View style = {{width: '90%', alignItems: 'flex-end', marginBottom: 30}}>
                    <Text style = {{color: '#20c9ff'}}>Forgot password?</Text>
                </View>

                <Pressable 
                    titleSize = {20}   
                    style = {styles.button(isValid)} 
                    onPress = {handleSubmit}
                    
                >
                    <Text style={{color: 'white'}}>Log In</Text>
                </Pressable>

                <View style = {styles.signupContainer}>
                    <Text style = {{color: 'white'}}>Don't have an account? </Text>
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Text style = {{color: '#20c9ff'}}>Sign up</Text>
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
        width: '90%'
    }),
    signupContainer: {
        flexDirection: 'row', 
        marginTop: 12
    }
})

export default LoginForm