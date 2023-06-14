import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './SignupScreenStyle';
import PrimaryButton from '../../Components/PrimaryButton';
import TextField from '../../Components/TextField';
import LoginScreen from '../LoginScreen/LoginScreen';
import PlanSelection from '../PlanSelection/PlanSelection';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../Assets/3xK1Receipt.png')}
          resizeMode="center"
        />
      </View>
      <Text style={styles.headerText}>Sign Up</Text>
      <View>
        <View style={styles.childcontainer}>
          <Text style={styles.bodyTxt}>First Name</Text>
          <TextField
            placeholder={'Enter your first name'}
            style={styles.bodyPart}
          />
        </View>
        <View style={styles.childcontainer}>
          <Text style={styles.bodyTxt}>Last Name</Text>
          <TextField
            placeholder={'Enter your last name'}
            style={styles.bodyPart}
          />
        </View>
        <View style={styles.childcontainer}>
          <Text style={styles.bodyTxt}>Email Address</Text>
          <TextField
            placeholder={'Enter your Email address'}
            style={styles.bodyPart}
          />
        </View>
        <View style={styles.childcontainer}>
          <Text style={styles.bodyTxt}>Password</Text>
          <TextField
            placeholder={'Enter your password'}
            style={styles.bodyPart}
          />
        </View>
        <View style={styles.childcontainer}>
          <Text style={styles.bodyTxt}>Confirm Password</Text>
          <TextField
            placeholder={'Enter your confirm password'}
            style={styles.bodyPart}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={'Submit'}
          style={styles.primaryButton}
          textstyle={styles.buttonText}
          onPress={() => navigation.navigate(PlanSelection)}
        />
      </View>
      <View style={styles.signupTxt}>
        <Text style={styles.text1}>Alerady have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(LoginScreen)}>
          <Text style={styles.text2}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
