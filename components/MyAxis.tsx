import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MyAxis = ():JSX.Element => {
  return (
    <View style={styles.card} >
      <Text style={styles.heading}>MyAxis</Text>
      <View style={styles.Subcard}>
        <View style={styles.miniCard}>
            <Icon name="bank" size={40} color="#B3255F"  />
            <Text style={styles.text} >Bank</Text>
            <Text style={styles.text} >Transfer</Text>
        </View>
        <View style={styles.miniCard}>
            <Image source={require('../Assets/upi.png')} style={styles.icon} />
            <Text style={styles.text} >UPI</Text>
        </View>
        <View style={styles.miniCard}>
            <Icon name="account-box-outline" size={40} color="#B3255F" />
            <Text style={styles.text} >Passbook</Text>
        </View>
        <View style={styles.miniCard}>
            <Icon name="cash" size={40} color="#B3255F" />
            <Text style={styles.text} >Cash on</Text>
            <Text style={styles.text} >Mobile</Text>
        </View>
      </View>
    </View>
  )
}

export default MyAxis

const styles = StyleSheet.create({
    card: {
        margin:15
    },
    heading: {
        fontSize:18,
        color: 'black',
        fontWeight: 'bold',
    },
    Subcard:{
        borderWidth: 1,
        borderColor: '#CACACA',
        flexDirection: 'row',
        borderRadius:10,
        height: 90,
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon:{
        height:40,
        width:30
    },
    miniCard: {
        marginHorizontal:10,
        paddingVertical:10,
        width: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 90
    }
})