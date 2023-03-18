import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome"

const CardBox = (): JSX.Element => {
  return (
    <View style={styles.card}>
      <ImageBackground source={require('../Assets/bg.png')} style={{height: 180}} >
        <View style={styles.cardTop}>
          <Image source={require('../Assets/logo.png')} style={styles.Logo} />
          <Image source={require('../Assets/visa.png')} style={styles.Logo} />
        </View>
        <View style={styles.cardMid}>
            <Text style={{marginVertical: 4, fontWeight:'600', color: 'white'}}>Savings Account</Text>
            <Text style={{marginVertical: 4, fontWeight:'600', color: 'white'}}>1253 2568 3345 7886</Text>
        </View>
        <View style={styles.cardBottom}>
            <View style={styles.amount}>
                <Icon name="rupee" size={25} color="white" />
                <Text style={{fontSize:22, fontWeight: 'bold', marginLeft:7, color: 'white'}} >5,00,00,000</Text>
            </View>
            <Icon name="eye-slash" size={25} color="white" style={{marginRight: 20}} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'blue',
    backgroundImage: '../Assets/bg.png',
    margin: 15,
    height: 180,
    borderRadius: 14,
    // resizeMode: 'cover',
    overflow: 'hidden'
  },
  cardTop:{
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  Logo: {
    height: 25,
    resizeMode: 'contain',
    width: 100,
    margin: 13,
    },
    cardMid: {
        margin: 15,
    },
    cardBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    amount:{
        flexDirection: 'row',
        alignItems: 'center',
    }
});
