import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import styles from './LoginScreenStyle';
import TextField from '../../../Components/TextField';
import PrimaryButton from '../../../Components/PrimaryButton';
import SignupScreen from '../SignupScreen/SignupScreen';
import PromoCodeScreen from '../PromoCodeScreen/PromoCodeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMG} from '../../../Constants/ImageConstant';

const LoginScreen = ({navigation}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={IMG.CompanyLogo.logoBig} resizeMode="center" />
      </View>
      <View>
        <Text style={styles.headerText}>Log In</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.childcontainer}>
        <View style={styles.bodyPart}>
          <Text style={styles.bodyTxt}>Username or Phone number</Text>
          <TextField placeholder={'Enter Your username or phone number'} />
        </View>
        <View style={styles.bodyPart}>
          <Text style={styles.bodyTxt}>Password</Text>
          <TextField
            placeholder={'Enter Your password'}
            secureTextEntry={!isShow}
          />
          <TouchableOpacity
            style={styles.showView}
            onPress={() => setIsShow(!isShow)}>
            <Icon
              name={isShow ? 'ios-eye-outline' : 'ios-eye-off-outline'}
              size={20}
              color="#868686"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text={'Log in'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={() => navigation.navigate(PromoCodeScreen)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetTxt}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.bottomButton}>
          <TouchableOpacity style={styles.primaryButton3}>
            <Image source={IMG.ExtraLogo.googlelogo} />
            <Text style={styles.buttonText3}>Continue with google</Text>
          </TouchableOpacity>
          <PrimaryButton
            text={'Create new account'}
            style={styles.primaryButton2}
            textstyle={styles.buttonText2}
            onPress={() => navigation.navigate(SignupScreen)}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
