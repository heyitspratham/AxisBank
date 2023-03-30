import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SameTop from '../components/SameTop'
import ProfileCard from '../components/ProfileCard'
import ProfileList from '../components/ProfileList'

const Profile = () => {

  const payeeList = [
    {
      uid: 1,
      iconName: 'account-edit',
      title: 'Update Name',
    },
    {
      uid: 2,
      iconName: 'email-outline',
      title: 'Update Email',
    },
    {
      uid: 3,
      iconName: 'phone-outline',
      title: 'Update Mobile Number',
    },
    {
      uid: 4,
      iconName: 'home-edit-outline',
      title: 'Update Address',
    },
    {
      uid: 5,
      iconName: 'card-bulleted-outline',
      title: 'Update PAN',
    },
    {
      uid: 6,
      iconName: 'calendar-edit',
      title: 'Update Date of Birth',
    },
    {
      uid: 7,
      iconName: 'account-cancel-outline',
      title: 'Update KYCC',
    },
  ];  


  return (
    <View>
      <SameTop heading={"Profile"}/>
      <ProfileCard/>
      <ProfileList payeeList={payeeList}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})