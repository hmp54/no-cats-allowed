import { View, Text, TouchableOpacity, StyleSheet, Image, ActionSheetIOS, Alert } from 'react-native'
import React from 'react'
import {getAuth, signOut} from 'firebase/auth'


const ProfileHeader = () => {
  return (
    <View style = {styles.container}>
        <Header/>
    </View>
  )
}


const Header = () => {
    return(
    <View style = {styles.headerContainer}>
        <TouchableOpacity 
            onPress = {() =>
                ActionSheetIOS.showActionSheetWithOptions(
                    {
                        options: ["Cancel", "Sign Out"],
                        destructiveButtonIndex: 1, 
                        cancelButtonIndex: 0,
                    },
                    (buttonIndex) => {
                        if(buttonIndex === 1){
                            signOut(auth).then(() =>{
                                Alert.alert('Sign out successful')
                            }).catch((error) => {
                                Alert.alert(error.message)
                            })
                        }
                    })
            } 
            style = {{flexDirection: 'row', alignItems: 'center'}}
        >
            <Text style = {styles.headerText}>
                [username here]
            </Text>
            <Image source = {require('../../assets/down-triangle.png')} style = {{width: 12, height: 12, marginLeft: 7}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source = {require('../../assets/option.png')} style = {{width: 25, height: 25}}/>
        </TouchableOpacity>
    </View>)
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText:{
        color: 'white',
        fontWeight: '600',
        fontSize: 20
    }
})

export default ProfileHeader