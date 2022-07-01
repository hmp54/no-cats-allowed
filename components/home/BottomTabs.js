import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {Divider } from 'react-native-elements'


const BOTTOM_TAB_ICONS = [
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
        inactive: require('../../assets/user.png')
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab]  = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress = {() => setActiveTab(icon.name)}>
            <Image source = {icon.inactive} style= {styles.icon}/>
        </TouchableOpacity>
    )

    return (
        <View style = {styles.wrapper}>
            <Divider width = {1} orientation = 'vertical'/>
            <View style = {styles.iconContainer}>
                <TouchableOpacity>
                    <Image
                        source = {BOTTOM_TAB_ICONS[0].inactive}
                        style = {styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source = {BOTTOM_TAB_ICONS[1].inactive}
                        style = {styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source = {BOTTOM_TAB_ICONS[2].inactive}
                        style = {styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
        icon:{
            width: 25,
            height: 25
        },
        iconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around', 
            marginTop: 15,
            marginBottom: 30
        },
        wrapper:{
            position: 'absolute',
            backgroundColor: 'black',
            width: '100%',
            bottom: '0%',
           zIndex: 999
        }
})

export default BottomTabs