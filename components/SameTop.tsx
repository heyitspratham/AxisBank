import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SameTop = ({heading}):JSX.Element => {
  return (
    <View style={styles.top}>
        <Text style={styles.greetings}>{heading}</Text>
        <Icon name="bell" size={30} color="black" />
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
        margin: 10,
      },
})