import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileCard = ():JSX.Element => {
  return (
    <View style={styles.profileCard}>
        <View style={styles.imageBorder}>
            <Image
                source={{
                    uri: 'https://avatars.githubusercontent.com/u/29747452?v=4'
                }}
                style={styles.image}
            />
        </View>
        <View style={styles.info}>
                  <Text style={styles.name}>Pratham Shukla</Text>
                  <View style={styles.info2}>
                    <Icon name="phone-outline" size={23} color= "black"/>
                  <Text style={styles.phno}>+91 8979072845</Text>
                  </View>
        </View>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    profileCard:{
        margin:20,
        padding:20,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#CACACA",
        flexDirection:'row',
        // justifyContent:'center',
        alignItems: 'center'
    },
    imageBorder:{
        padding:6,
        backgroundColor:"#B3255F",
        width:106,
        height:106,
        borderRadius:106,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width:100,
        height:100,
        borderRadius:100,
        borderColor: 'white',
        borderWidth:2,
        
        
        // outline: 'white',
        // oulineOffset: 1
    },
    name:{
        fontSize:24,
        fontWeight: '900',
        color: 'black'
    },
    info:{
        // flexDirection: 'row'
        marginHorizontal: 20
    },
    info2:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:7
    },
    phno:{
        color: 'black', 
        fontSize:20,
        marginLeft:10
    }
})