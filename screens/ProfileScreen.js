import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profileScreen/ProfileHeader'
import ProfileStats from '../components/profileScreen/ProfileStats'
import Bio from '../components/profileScreen/Bio'
const ProfileScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <ProfileHeader/>
        <ProfileStats/>
        <Bio/>
        {/*<Posts/>*/}
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1, //makes it so that the entire background is black
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