import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import TabBar from './components/TabBar';

import { 
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import CardBox from "./components/CardBox";
import MyAxis from "./components/MyAxis";
import TopNav from "./components/TopNav";
import Services from "./Screens/Services";
import Profile from "./Screens/Profile";
// import TabBar from "./components/TabBar";



const App = ()=>{
  return(
      <NavigationContainer>
        <TabBar/>
      </NavigationContainer>
      // <SafeAreaView>
      //   <Services/>
      //   <Profile/>
      // </SafeAreaView>

    
  )
}

// const App = ()=>{
//   return(
//     <SafeAreaView>
//       <TopNav/>
//       <Text style={styles.greetings} >Hi, Pratham Shukla</Text>
//       <CardBox/>
//       <MyAxis data={'My Axis'}  />
//       <MyAxis data={'Quick Links'}  />
//       <MyAxis data={'Bill Payments'}  />
//     </SafeAreaView>
//   )
// }

export default App;


const styles = StyleSheet.create({
  greetings: {
    fontSize:24,
    margin: 10,
    fontWeight: '900',
    color: '#B3255F'
  }
})