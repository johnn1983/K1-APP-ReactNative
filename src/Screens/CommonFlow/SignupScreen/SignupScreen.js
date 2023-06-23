/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './SignupScreenStyle';
import {IMG} from '../../../Constants/ImageConstant';
import PrimaryButton from '../../../Components/PrimaryButton';
import TextField from '../../../Components/TextField';
import LoginScreen from '../LoginScreen/LoginScreen';
import PlanSelection from '../PlanSelection/PlanSelection';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';

const SignupScreen = ({navigation}) => {
  const [isShow, setIsshow] = useState(false);
  const [isShowCon, setIsshowCon] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [registerType, setRegisterType] = useState('General');

  const handleGeneral = () => {
    setValue('General');
    setRegisterType('General');
    setOpen(false);
  };
  const handleCompany = () => {
    setValue('Company');
    setRegisterType('Company');
    setOpen(false);
  };
  const handleEmployee = () => {
    setValue('Employee');
    setRegisterType('Employee');
    setOpen(false);
  };

  const handleSubmit = () => {
    if (value) {
      navigation.navigate('PlanSelection', {
        registerType: registerType,
      });
    } else {
      Alert.alert('Please select Register as...');
    }
  };

  const RegisterModal = () => {
    return (
      <View style={styles.selectModalView}>
        <TouchableOpacity style={styles.modalView} onPress={handleGeneral}>
          <Icons
            name="triangle-right"
            size={14}
            color={value === 'General' ? 'black' : '#868686'}
          />
          <Text
            style={{
              ...styles.selectModalTxt,
              color: value === 'General' ? 'black' : '#868686',
            }}>
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalView} onPress={handleCompany}>
          <Icons
            name="triangle-right"
            size={14}
            color={value === 'Company' ? 'black' : '#868686'}
          />
          <Text
            style={{
              ...styles.selectModalTxt,
              color: value === 'Company' ? 'black' : '#868686',
            }}>
            Company
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalView} onPress={handleEmployee}>
          <Icons
            name="triangle-right"
            size={14}
            color={value === 'Employee' ? 'black' : '#868686'}
          />
          <Text
            style={{
              ...styles.selectModalTxt,
              color: value === 'Employee' ? 'black' : '#868686',
            }}>
            Employee
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={IMG.CompanyLogo.logoBig} resizeMode="center" />
          </View>
          <Text style={styles.headerText}>Sign Up</Text>
          <View>
            <View style={styles.childcontainer}>
              <Text style={styles.bodyTxt}>Registration As</Text>
              <View>
                <TouchableOpacity
                  style={{
                    ...styles.registerField,
                    backgroundColor: value ? '#255A98' : null,
                    borderWidth: value ? 0 : 2,
                  }}
                  onPress={() => setOpen(!open)}>
                  <Text
                    style={{
                      ...styles.registerTxt,
                      color: value ? 'white' : '#868686',
                    }}>
                    {value === 'General'
                      ? 'General'
                      : value === 'Company'
                      ? 'Company'
                      : value === 'Employee'
                      ? 'Employee'
                      : 'Register as a..'}
                  </Text>
                  <Icons
                    name="triangle-down"
                    size={14}
                    color={value ? 'white' : '#B2ADAD'}
                  />
                </TouchableOpacity>
                {open ? RegisterModal() : null}
              </View>
            </View>
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
                secureTextEntry={!isShow}
              />
              <TouchableOpacity
                style={styles.showView}
                onPress={() => setIsshow(!isShow)}>
                <Icon
                  name={isShow ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                  size={20}
                  color="#868686"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.childcontainer}>
              <Text style={styles.bodyTxt}>Confirm Password</Text>
              <TextField
                placeholder={'Enter your confirm password'}
                style={styles.bodyPart}
                secureTextEntry={!isShowCon}
              />
              <TouchableOpacity
                style={styles.showView}
                onPress={() => setIsshowCon(!isShowCon)}>
                <Icon
                  name={isShowCon ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                  size={20}
                  color="#868686"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={'Submit'}
              style={styles.primaryButton}
              textstyle={styles.buttonText}
              onPress={handleSubmit}
            />
          </View>
          <View style={styles.signupTxt}>
            <TouchableOpacity
              onPress={() => navigation.navigate(LoginScreen)}
              style={{flexDirection: 'row'}}>
              <Text style={styles.text1}>Already have an account? </Text>
              <Text style={styles.text2}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
