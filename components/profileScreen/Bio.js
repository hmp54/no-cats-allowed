import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const Bio = () => {
  return (
    <View style = {{marginTop: 15}}>
      <Text style ={styles.header}>Your header here 💕</Text>
      <Text style ={styles.bio}>Hey! My name is Helen and I'm currently working on this app. It's going to have an AI that looks at the kinds of pictures you post on the app.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5
    },
    bio: {
        color: 'white',
        fontSize: 16,
        marginBottom: 20
    },

})
export default Bio