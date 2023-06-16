/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './SignupScreenStyle';
import PrimaryButton from '../../Components/PrimaryButton';
import TextField from '../../Components/TextField';
import LoginScreen from '../LoginScreen/LoginScreen';
import PlanSelection from '../PlanSelection/PlanSelection';
import RNPickerSelect from 'react-native-picker-select';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignupScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'General', value: 'General'},
    {label: 'Company', value: 'Company'},
    {label: 'Employee', value: 'Employee'},
  ]);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = value => {
    setSelectedValue(value);
  };

  const pickerItems = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

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
          <View style={{backgroundColor: 'green'}}>
            {/* <DropDownPicker
              style={{
                width: wp(80),
                borderRadius: 30,
                borderColor: '#77869D',
                borderWidth: 2,
              }}
              open={open}
              value={value} //genderValue
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select Gender"
              placeholderStyle={{color: 'grey'}}
              // onOpen={onGenderOpen}
              // onChangeValue={onChange}
              // listItemContainerStyle={{backgroundColor: 'grey'}}
              listParentContainerStyle={{backgroundColor: 'red'}}
            /> */}
            {/* <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            /> */}
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
