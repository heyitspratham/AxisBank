import {
  SafeAreaView,
} from 'react-native';
import React from 'react';


import Box from '../components/Box';
import SameTop from '../components/SameTop';
import List from '../components/List';

const FundTransfer = (): JSX.Element => {
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
      <SameTop heading={"Fund Transfer"}/>
      <Box cardList={cardList}/>
      <List payeeList={payeeList}/>
    </SafeAreaView>
  );
};

export default FundTransfer;
