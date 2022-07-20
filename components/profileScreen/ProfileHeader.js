import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ProfileHeader = () => {
  return (
    <View style = {styles.container}>
        <Header/>
    </View>
  )
}

const Header = () => (
    <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}>[Your Username here]</Text>
        <TouchableOpacity>
            <Image source = {require('../../assets/option.png')} style = {{width: 25, height: 25}}/>
        </TouchableOpacity>
    </View>
)


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