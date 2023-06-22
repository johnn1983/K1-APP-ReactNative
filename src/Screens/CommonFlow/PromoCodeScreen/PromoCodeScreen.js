import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';

import styles from './PromoCodeStyle';
import PrimaryButton from '../../../Components/PrimaryButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import SignupScreen from '../SignupScreen/SignupScreen';
import {IMG} from '../../../Constants/ImageConstant';

const PromoCodeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={IMG.CompanyLogo.logoBig} resizeMode="center" />
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
      <View>
        <TouchableOpacity
          style={styles.signupTxt}
          onPress={() => navigation.navigate(SignupScreen)}>
          <Text style={styles.text2}>Don't have a promocode?</Text>
          <Text style={styles.text}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PromoCodeScreen;
