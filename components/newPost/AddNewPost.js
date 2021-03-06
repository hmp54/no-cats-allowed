import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => (
  <View style = {styles.container}>
    <Header navigation = {navigation}/>
    <FormikPostUploader navigation = {navigation}/> 
  </View>
)

const Header = ({navigation}) => (
    <View style ={styles.headerContainer}>
      <TouchableOpacity onPress = {() => navigation.goBack()}>
        <Image source = {require('../../assets/back.png')} style = {{width: 25, height: 25}}/>
      </TouchableOpacity>
      <Text style = {styles.headerText}>NEW POST</Text>
      <Text></Text>
  </View>
)


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '600', 
    fontSize: 20
  }
})

export default AddNewPost