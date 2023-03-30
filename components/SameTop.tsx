import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SameTop = ({heading, bell, myreq}):JSX.Element => {
  return (
    <View style={styles.top}>
        <Text style={styles.greetings}>{heading}</Text>
        <TouchableOpacity>
          {myreq&&<Text style={styles.req}>My Request</Text>}
          {bell&&<Icon name="bell-outline" size={30} color="black" />}
        </TouchableOpacity>
    </View>
  )
}

export default SameTop

const styles = StyleSheet.create({
    greetings: {
        fontSize: 24,
        fontWeight: '900',
        color: '#B3255F',
      },
      top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
      },
      req:{
        fontSize: 18,
     
        color: '#B3255F',

      }
})