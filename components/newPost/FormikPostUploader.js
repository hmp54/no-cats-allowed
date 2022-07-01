import { View, Text, Image,  TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import {Formik} from 'formik'

const PLACEHOLDER = require('../../assets/placeholder.png')

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Max character limit')
})

const FormikPostUploader = () => {
    const [thumbnail, setThumbnailUrl] = useState(PLACEHOLDER)

  return (
    <Formik
        initialValues = {{caption: '', imageUrl: ''}}
        onSubmit = {(values) => console.log(values)}
        validationSchema = {uploadPostSchema}
    >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
            <>
            <View style = {styles.container}>
                <Image style = {styles.imagePlaceholder} source = {PLACEHOLDER}/>
                <TextInput style = {{color: 'white', fontSize: 20}}
                    placeholder = 'Write your caption here...' 
                    placeholderTextColor = 'gray'
                    multiline ={true}
                    onChangeText={handleChange('caption')}
                    onBlur ={handleBlur('caption')}
                    value = {values.caption}
                ></TextInput>
            </View>

            <View>
                <TextInput 
                    style = {{color: 'white', fontSize: 18}}
                    placeholder = 'Enter image URL...' 
                    placeholderTextColor = 'gray'
                    onChangeText = {handleChange('imageUrl')}
                    onBlur = {handleChange('imageUrl')}
                    value = {values.imageUrl}
                ></TextInput>
            </View>
            </>
        )}
    </Formik>
  )
}

const styles = StyleSheet.create({
   imagePlaceholder:{
    width: 100, 
    height: 100,
    borderRadius: 12
   },

   container: {
    display: 'flex',
    flexDireciton: 'row',
    margin: 20,
    justifyContent: 'space-between',

   }
})

export default FormikPostUploader