import {View, Text, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

import styles from './IntroScreenStyle';
import PrimaryButton from '../../Components/PrimaryButton';
import LoginScreen from '../LoginScreen/LoginScreen';

const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../Assets/3xK1Receipt.png')}
          resizeMode="center"
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>K-1</Text>
        <Text style={styles.text} numberOfLines={3}>
          K-1 app for small business owners to keep everything organized
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={'Get Started'}
          style={styles.primaryButton}
          textstyle={styles.buttonText}
          onPress={() => navigation.navigate(LoginScreen)}
        />
      </View>
    </View>
  );
};

export default IntroScreen;
