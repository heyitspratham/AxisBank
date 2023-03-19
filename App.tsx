import React from "react";

import { 
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import CardBox from "./components/CardBox";
import MyAxis from "./components/MyAxis";
import TopNav from "./components/TopNav";

const App = ()=>{
  return(
    <SafeAreaView>
      <TopNav/>
      <Text style={styles.greetings} >Hi, Pratham Shukla</Text>
      <CardBox/>
      <MyAxis data={'My Axis'}  />
      <MyAxis data={'Quick Links'}  />
      <MyAxis data={'Bill Payments'}  />
    </SafeAreaView>
  )
}

export default App;


const styles = StyleSheet.create({
  greetings: {
    fontSize:24,
    margin: 10,
    fontWeight: '900',
    color: '#B3255F'
  }
})