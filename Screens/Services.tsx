import { 
  SafeAreaView,
 } from 'react-native'
import React from 'react'
import SameTop from '../components/SameTop'
import Box from '../components/Box';
import List from '../components/List';


const Services = ():JSX.Element => {

  const cardList = [
    {
      uid: 1,
      iconName: 'hand-coin-outline',
      text: 'Loan',
    },
    {
      uid: 2,
      iconName: 'reply-circle',
      text: 'Pay My Dues',
    },
    {
      uid: 3,
      iconName: 'cash',
      text: 'Cheques',
    },
    {
      uid: 4,
      iconName: 'gift-outline',
      text: 'Deals',
    },
  ];

  const payeeList = [
    {
      uid: 1,
      name: 'Block Debit Card',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Block Credit Card',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'request Chequebook',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Update Mobile Number',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <SafeAreaView>
      <SameTop heading={"Services"}/>
      <Box cardList={cardList}/>
      <List payeeList={payeeList}/>

    </SafeAreaView>
  )
}

export default Services
