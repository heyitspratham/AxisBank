import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TopNav = () => {
  return (
    <View style={styles.navBar} >
        <TouchableOpacity>
            <Icon name="menu" size={30} color="black"  />
        </TouchableOpacity>
        <View style={styles.nav2} >
            <Icon name="bell" size={30} color="black"  />
            <Icon name="magnify" size={30} color="black"  />
        </View>
    </View>
  )
}

export default TopNav

const styles = StyleSheet.create({
    navBar: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        // backgroundColor: 'blue'
    },
    nav2: {
        flexDirection: 'row',
        width: 70,
        justifyContent: 'space-between',
    }

})