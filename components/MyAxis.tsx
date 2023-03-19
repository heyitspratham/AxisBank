import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {React, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyAxis = (props): JSX.Element => {
  const myAxis = [
    {
      uid: 1,
      iconName: 'bank',
      text: 'Bank Transfer',
    },
    {
      uid: 2,
      iconName: 'triangle-wave',
      text: 'UPI',
    },
    {
      uid: 3,
      iconName: 'account-box-outline',
      text: 'Passbook',
    },
    {
      uid: 4,
      iconName: 'cash',
      text: 'Cash on Mobile',
    },
  ];
  const quickLinks = [
    {
      uid: 1,
      iconName: 'chart-bar',
      text: 'Mutual Funds',
    },
    {
      uid: 2,
      iconName: 'hand-coin-outline',
      text: 'Loan',
    },
    {
      uid: 3,
      iconName: 'chart-bar-stacked',
      text: 'Investments',
    },
    {
      uid: 4,
      iconName: 'credit-card',
      text: 'Credit Cards',
    },
  ];
  const billPayments = [
    {
      uid: 1,
      iconName: 'satellite-uplink',
      text: 'DTH',
    },
    {
      uid: 2,
      iconName: 'cellphone',
      text: 'Mobile',
    },
    {
      uid: 3,
      iconName: 'credit-card',
      text: 'Credit Card',
    },
    {
      uid: 4,
      iconName: 'file-document-multiple-outline',
      text: 'Quick Bil',
    },
  ];

  let Value = myAxis;
  if (props.data === 'My Axis') {
    Value = myAxis;
  } else if (props.data === 'Quick Links') {
    Value = quickLinks;
  } else if (props.data === 'Bill Payments') {
    Value = billPayments;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{props.data}</Text>
      <View style={styles.Subcard}>
        {Value.map(({uid, iconName, text}) => (
          <View key={uid} style={styles.miniCard}>
            <TouchableOpacity>
              <Icon name={iconName} size={40} color="#B3255F" />
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MyAxis;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  Subcard: {
    borderWidth: 1,
    borderColor: '#CACACA',
    flexDirection: 'row',
    borderRadius: 10,
    height: 90,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 30,
  },
  miniCard: {
    marginHorizontal: 8,
    paddingVertical: 10,
    width: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
  },
  text: {
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
  },
});
