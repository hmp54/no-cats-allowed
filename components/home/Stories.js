import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => {

  return (
    <View>
        <View>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator = {false}
            >
                {USERS.map((story, index) =>{
                   return <View key={index}>
                    <TouchableOpacity style = {{alignItems: 'center'}}>
                            <Image source = {story.image} style = {styles.story}/>
                            <Text style = {{color: 'white'}}>
                                {story.user.length > 9 ? story.user.slice(0,8) + '...' 
                                : story.user}</Text>
                        </TouchableOpacity>
                   </View>
                })}
            </ScrollView>
        <Text style = {{color:'white'}}></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 8, 
        borderWidth: 3,
        borderColor: 'lime',
    }
})



export default Stories