import { 
  SafeAreaView,
 } from 'react-native'
import React from 'react'
import SameTop from '../components/SameTop'
import Box from '../components/Box';
import List from '../components/List';
import Search from '../components/Search';


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
      iconName: 'credit-card-off-outline',
    },
    {
      uid: 2,
      name: 'Block Credit Card',
      iconName: 'credit-card-off-outline',
    },
    {
      uid: 3,
      name: 'request Chequebook',
      iconName: 'credit-card-edit-outline',
    },
    {
      uid: 4,
      name: 'Update Mobile Number',
      iconName: 'cellphone-text',
    },
  ];

  return (
    <SafeAreaView>
      <SameTop heading={"Services"} myreq={true}/>
      <Search/>
      <Box cardList={cardList}/>
      <List payeeList={payeeList}/>

    </SafeAreaView>
  )
}

export default Services
