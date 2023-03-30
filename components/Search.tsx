import { StyleSheet, Text, TextInput, View } from 'react-native'
import {React, useState}  from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Search = ():JSX.Element => {
    const [text, setText] = useState('')
  return (
    <View style={styles.bar}>
        <Icon name="search" size={20} />
      <TextInput
        onChangeText={setText}
        placeholder='How can we help you today?'
        value={text}
        style={styles.text}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    bar:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderWidth:1,
        borderColor: '#CACACA',
        paddingHorizontal:9,
        borderRadius:10,
        marginBottom:8
    },
    text:{
        marginVertical:-5
    }
})