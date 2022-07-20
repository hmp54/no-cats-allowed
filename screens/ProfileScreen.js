import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profileScreen/ProfileHeader'
import ProfileStats from '../components/profileScreen/ProfileStats'
import Bio from '../components/profileScreen/Bio'
import { Divider } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <ScrollView>
        <ProfileHeader/>
        <ProfileStats/>
        <Bio/>
        <TouchableOpacity style = {styles.editProfile}>
        <Text style = {{color: 'white', fontSize: 16, fontWeight: '600'}}>Edit Profile </Text>
        </TouchableOpacity>
        <Divider width={1} orientation='vertical'/>
        {/*<Posts/>*/}
        </ScrollView>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1, //makes it so that the entire background is black
    },
    editProfile:{
      backgroundColor: '#0096F6',
      borderRadius: 3,
      alignItems: 'center',
      marginBottom: 20,
      height: 30,
      justifyContent: 'center'
    }
})
export default ProfileScreen

/*
GENERAL LAYOUT (from top-down): 
-Header:
    -Top navigation 
    -Profile photo + posts/follower/following count
    -Name (bold) + about section 
-Posts section
*/