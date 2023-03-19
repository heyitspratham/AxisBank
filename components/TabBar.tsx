import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import FundTransfer from '../Screens/FundTransfer';
import Services from '../Screens/Services';
import Profile from '../Screens/Profile';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Text } from 'react-native/types';


const Tab = createBottomTabNavigator();

const TabBar = ():JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: '#CACACA',
      tabBarActiveTintColor: '#B3255F',
    }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({color})=>(
          <Icons name="home-outline" size={25} color={color}/>
          // <Text>Home</Text>
        )
      }} />
      <Tab.Screen name="Fund Transfer" component={FundTransfer} options={{
        tabBarIcon: ({color})=>(
          <Icon name="compare-arrows" size={25} color={color}/>
        )
      }} />
      <Tab.Screen name="Services" component={Services} options={{
        tabBarIcon: ({color})=>(
          <Icons name="briefcase-check-outline" size={25} color={color}/>
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({color})=>(
          <Icons name="account-outline" size={25} color={color}/>
        )
      }}/> 
    </Tab.Navigator>
  )
}

export default TabBar

// const styles = StyleSheet.create({})