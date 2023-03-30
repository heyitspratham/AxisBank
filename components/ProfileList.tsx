import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/MaterialIcons'

const ProfileList = ({payeeList}):JSX.Element => {
  return (
    <View>
      {payeeList.map(({uid,iconName, title}):JSX.Element=>(
        <View key={uid} >
            <TouchableOpacity style={styles.tab}>
                <View style={styles.info}>
                    <Icon name={iconName} size={35} color="#B3255F"/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Icons name="keyboard-arrow-right" size={35} color="black" />

            </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default ProfileList

const styles = StyleSheet.create({
    tab:{
        borderColor:'#CACACA',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    info:{
        flexDirection:'row',
        alignItems: 'center',
    },
    title:{
        marginLeft: 15,
        fontSize:20,
        fontWeight: '600',
        color: 'black'
    }
})