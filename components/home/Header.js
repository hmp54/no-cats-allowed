import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

const Header = () => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity>
                <Image 
                    style = {styles.logo} 
                    source = {require('../../assets/logo.png')}
                />
            </TouchableOpacity> 
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style = {styles.icon}
                        source = {require('../../assets/add.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style = {styles.icon}
                        source = {require('../../assets/heart.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.unreadBadge}>
                        <Text style = {styles.unreadBadgeText}>12</Text>
                    </View>
                    <Image
                        style = {styles.icon}
                        source = {require('../../assets/message.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row',
        marginHorizontal: 10,
    }, 
    logo:{
        width: 200,
        height: 70,
        resizeMode: 'contain'
    },
    iconsContainer:{
        flexDirection: 'row'
    },
    icon:{
        width: 25,
        height: 25, 
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge:{
        backgroundColor: 'red', 
        position: 'absolute',
        left: 20,
        bottom: 16,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center', 
        justifyContent: 'center',
        zIndex: 100, 
    },
    unreadBadgeText:{
        fontWeight: '600',
        color:'white'
    }
})
export default Header