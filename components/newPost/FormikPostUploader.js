import { View, Text, Image,  TextInput, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { Divider } from 'react-native-elements'

const PLACEHOLDER = 'https://i.postimg.cc/4NF5Cd6b/placeholder.png'
 
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Max character limit')
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER)

  return (
    <Formik
        initialValues = {{caption: '', imageUrl: ''}}
        onSubmit = {values => {
            console.log(values)
            console.log('Your post was submitted successfully')
            navigation.goBack()
            }}
        validationSchema = {uploadPostSchema}
        validateOnMount = {true}
    >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
            <>
            <View style = {styles.container}>
                <Image style = {styles.imagePlaceholder} source = {{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER}}/>
                <View style = {{flex: 1, marginLeft: 12}}>
                    <TextInput style = {{color: 'white', fontSize: 20}}
                        placeholder = 'Write a caption...' 
                        placeholderTextColor = 'gray'
                        multiline ={true}
                        onChangeText={handleChange('caption')}
                        onBlur ={handleBlur('caption')}
                        value = {values.caption}
                    ></TextInput>
                </View>
            </View>

            <Divider width={0.2} orientation = 'vertical'/>

            <View style = {{margin: 10}}>
                <TextInput 
                        onChange= {e => setThumbnailUrl(e.nativeEvent.text)}
                        style = {{color: 'white', fontSize: 18}}
                        placeholder = 'Paste image URL...' 
                        placeholderTextColor = 'gray'
                        onChangeText = {handleChange('imageUrl')}
                        onBlur = {handleChange('imageUrl')}
                        value = {values.imageUrl}
                />
                {/*Shows a formik error message if URL condition isn't filled*/}
                {errors.imageUrl && (
                    <Text style = {{fontSize: 15, color: 'red'}}>
                        {errors.imageUrl}
                    </Text>
                )}
            </View>
            <Button onPress = {handleSubmit} title='Share' disabled={!isValid}></Button>
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
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 12,
   }
})

export default FormikPostUploader