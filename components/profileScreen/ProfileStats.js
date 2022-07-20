import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, withTheme } from 'react-native-elements';
import {auth} from '../../firebase'

const defaultDP = 'https://i.postimg.cc/TYw46wW6/profile-Placeholder.png'; 

const ProfileStats = () => {
  return (
    <View style = {styles.container}>
        <Image source = {{uri: defaultDP}} style = {styles.profilePhoto}/>
        <View>
            <View style = {styles.statsContainer}>
                <TouchableOpacity style = {styles.stats}>
                    <Text style = {styles.statsTop}>100</Text>
                    <Text style = {styles.statsBottom}>posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.stats}>
                    <Text style = {styles.statsTop}>246</Text>
                    <Text style = {styles.statsBottom}>followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.stats}>
                    <Text style = {styles.statsTop}>245</Text>
                    <Text style = {styles.statsBottom}>following</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    profilePhoto:{
        height: 100,
        width: 100,
        borderRadius: 100
    },
    statsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    stats: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    statsTop:{
        color: 'white',
        fontSize: 24,
        fontWeight: '600'
    },
    statsBottom:{
        color: 'grey',
        fontSize: 16,
        fontWeight: '500'
    },
    editProfile:{
        alignItems: 'center',
        width: '100%'
    }
})


export default ProfileStats