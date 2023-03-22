import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';

const FundTransfer = (): JSX.Element => {
  const Row = ({children}) => <View style={styles.row}>{children}</View>;

  const cardList = [
    {
      uid: 1,
      iconName: 'angularjs',
      text: 'Axis Bank',
    },
    {
      uid: 2,
      iconName: 'triangle-wave',
      text: 'UPI',
    },
    {
      uid: 3,
      iconName: 'bank',
      text: 'Other Bank',
    },
    {
      uid: 4,
      iconName: 'account-plus-outline',
      text: 'Add Payee',
    },
  ];

  const payeeList = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      acno: '1234567890321',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      acno: '1234567890322',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      acno: '1234567890323',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      acno: '1234567890324',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.greetings}>Fund Transfers</Text>
        <Icon name="bell" size={30} color="black" />
      </View>
      <View style={styles.cards}>
        {cardList.map(({uid, iconName, text}) => (
          <View key={uid} style={styles.card}>
            <TouchableOpacity>
              <Icon name={iconName} size={60} color="#B3255F" />
              <Text>{text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.payee}>
        <Text style={styles.head}>All Payees</Text>
        <View style={styles.list}>
          {payeeList.map(({uid, name, acno, imageUrl}) => (
            <View key={uid} style={styles.stuff}>
              <View style={styles.subList}>
                <Image
                  source={{
                    uri: imageUrl,
                  }}
                  style={styles.userImage}
                />
                <View style={styles.info}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.acno}>{acno}</Text>
                </View>
              </View>
              <Icons name="keyboard-arrow-right" size={20} color="black" />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FundTransfer;

const styles = StyleSheet.create({
  head: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
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
  heading: {},
  row: {},
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
  list: {},
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
    // flex:1,
    flexDirection: 'row',
    // borderColor:'#CACACA',
    // borderWidth:1,
    // borderRadius:12,
    // margin:5,
    // paddingVertical:5,
    // paddingHorizontal:14,
    alignItems:'center'
  },
  info: {
    marginHorizontal: 15,
    marginVertical: 3,
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
  acno: {
    fontSize: 10,
  },
});
