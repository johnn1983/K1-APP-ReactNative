/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
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

const SignupScreen = ({navigation}) => {
  const [isShow, setIsshow] = useState(false);
  const [isShowCon, setIsshowCon] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'General', value: 'General'},
    {label: 'Company', value: 'Company'},
    {label: 'Employee', value: 'Employee'},
  ]);
  const [registerType, setRegisterType] = useState('General');
  const handleValueChange = value => {
    setRegisterType(value);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={IMG.CompanyLogo.logoBig} resizeMode="center" />
          </View>
          <Text style={styles.headerText}>Sign Up</Text>
          <View>
            <View style={styles.childcontainer}>
              <Text style={styles.bodyTxt}>Registration As</Text>
              <View
                style={{
                  width: wp(80),
                  height: hp(7),
                  marginBottom: open ? hp(15) : hp(0.5),
                }}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  onChangeValue={handleValueChange}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  containerStyle={styles.pickerStyle}
                  placeholder="Register as a..."
                  placeholderStyle={styles.placeStyle}
                  textStyle={styles.txtStyle}
                  labelStyle={styles.placeStyle}
                  listMode="SCROLLVIEW"
                  style={styles.pickerSize}
                  selectedItemLabelStyle={styles.itemSelect}
                  dropDownContainerStyle={styles.dropdownContainer}
                />
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
                keyboardAppearnce
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
              onPress={() =>
                navigation.navigate('PlanSelection', {
                  registerType: registerType,
                })
              }
            />
          </View>
          <View style={styles.signupTxt}>
            <TouchableOpacity
              onPress={() => navigation.navigate(LoginScreen)}
              style={{flexDirection: 'row'}}>
              <Text style={styles.text1}>Alerady have an account? </Text>
              <Text style={styles.text2}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
