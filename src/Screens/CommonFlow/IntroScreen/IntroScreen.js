import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';

import styles from './IntroScreenStyle';
import PrimaryButton from '../../../Components/PrimaryButton';
import LoginScreen from '../LoginScreen/LoginScreen';
import {IMG} from '../../../Constants/ImageConstant';

const IntroScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={IMG.CompanyLogo.logoBig} resizeMode="center" />
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
    </SafeAreaView>
  );
};

export default IntroScreen;
