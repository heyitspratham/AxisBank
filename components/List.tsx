import { 
    StyleSheet,
    Text,
    View,
    Image,
 } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const List = ({payeeList}):JSX.Element => {
  return (
    <View style={styles.payee}>
        <Text style={styles.head}>All Payees</Text>
        <View style={styles.list}>
          {payeeList.map(({uid, name, acno, imageUrl,iconName}) => (
            <View key={uid} style={styles.stuff}>
              <View style={styles.subList}>
                {imageUrl&&<Image
                  source={{
                    uri: imageUrl,
                  }}
                  style={styles.userImage}
                />}
                {iconName&&<Icon
                  name={iconName}
                  size={30}
                  color="#B3255F"
                  // style={styles.userImage}
                />}
                <View style={styles.info}>
                  <Text style={acno?styles.name:styles.name2}>{name}</Text>
                  {acno&&<Text style={styles.acno}>{acno}</Text>}
                </View>
              </View>
              <Icons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          ))}
        </View>
      </View>
  )
}

export default List

const styles = StyleSheet.create({
    head: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
      },
    stuff:{
        borderColor:'#CACACA',
        borderWidth:1,
        borderRadius:12,
        margin:5,
        paddingVertical:5,
        paddingHorizontal:14,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    
      },
      subList: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
      },
      info: {
        marginHorizontal: 15,
        marginVertical: 7,
        // alignItems:'center'
        justifyContent: 'center'
      },
      payee: {
        marginHorizontal: 15,
        marginVertical: 15,
      },
      userImage: {
        height: 30,
        width: 30,
        borderRadius: 30,
      },
      name: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      name2: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      acno: {
        fontSize: 10,
      },
})