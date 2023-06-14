import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import styles from './PromoCodeStyle';
import PrimaryButton from '../../Components/PrimaryButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import SignupScreen from '../SignupScreen/SignupScreen';

const PromoCodeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../Assets/3xK1Receipt.png')}
          resizeMode="center"
        />
      </View>
      <Text style={styles.heading}>Enter Your Promo Code</Text>
      <View style={styles.ViewOTP}>
        <OTPInputView
          style={styles.Otpinputview}
          pinCount={5}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.codeInputFieldStyle}
          codeInputHighlightStyle={styles.codeInputHighlightStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={'Next'}
          style={styles.primaryButton}
          textstyle={styles.buttonText}
          onPress={() => navigation.navigate(PromoCodeScreen)}
        />
      </View>
      <View style={styles.signupTxt}>
        <Text styles={styles.text2}>Don't have a promocode?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SignupScreen)}>
          <Text style={styles.text}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PromoCodeScreen;
