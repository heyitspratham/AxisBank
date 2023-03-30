import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity, 
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Box = ({cardList}):JSX.Element => {
  return (
    <View style={styles.cards}>
        {cardList.map(({uid, iconName, text}) => (
          <View key={uid} style={styles.card}>
            <TouchableOpacity>
              <Icon name={iconName} size={60} color="#B3255F" />
              <Text style={styles.cardText}>{text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
  )
}

export default Box

const styles = StyleSheet.create({
    cards: {
        // flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 15,
      },
      card: {
        width: '42%',
        marginVertical: 10,
        marginHorizontal: '4%',
        // backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CACACA',
        padding: 25,
        alignItems: 'center',
      },
      cardText:{
        marginVertical: 7,
        textAlign: 'center'
      }
})