import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {Divider } from 'react-native-elements'

const BottomTabs = () => {
  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  )
}

const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/home-active.png'),
        inactive: require('../../assets/home.png') 
    },
    {
        name: 'Search',
        active: require('../../assets/search-active.png'),
        inactive: require('../../assets/search.png') 
    },
    {
        name: 'Profile',
        active: require('../../assets/user-active.png'),
        inactive: require('../../asssets/user.png')
    }
]

export default BottomTabs