import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './AddEmployeeStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../../Components/PrimaryButton';
import Iconss from 'react-native-vector-icons/Foundation';

const AddEmployee = ({navigation, route}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Add Employee</Text>
      </View>
      <ScrollView>
        <View style={styles.bodyView2}>
          <View style={styles.bodyChildview}>
            <Text style={styles.bodyTxt}>First name</Text>
            <View style={styles.inputFieldView}>
              <Icon name="account-circle-outline" size={22} color="#767676" />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your first name"
                placeholderTextColor={'#767676'}
              />
            </View>
          </View>
          <View style={styles.bodyChildview}>
            <Text style={styles.bodyTxt}>Last name</Text>
            <View style={styles.inputFieldView}>
              <Icon name="account-circle-outline" size={22} color="#767676" />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your last name"
                placeholderTextColor={'#767676'}
              />
            </View>
          </View>
          <View style={styles.bodyChildview}>
            <Text style={styles.bodyTxt}>Email</Text>
            <View style={styles.inputFieldView}>
              <Iconss name="mail" size={22} color="#767676" />
              <TextInput
                style={styles.inputField}
                placeholder="abc@gmail.com"
                placeholderTextColor={'#767676'}
              />
            </View>
          </View>
          <View style={styles.bodyChildview}>
            <Text style={styles.bodyTxt}>Mobile</Text>
            <View style={styles.inputFieldView}>
              <Icons name="call" size={22} color="#767676" />
              <TextInput
                style={styles.inputField}
                placeholder="+880-1994779217"
                placeholderTextColor={'#767676'}
              />
            </View>
          </View>
          <View style={styles.bodyChildview}>
            <Text style={styles.bodyTxt}>Username</Text>
            <View style={styles.inputFieldView}>
              <Icon name="account-circle-outline" size={25} color="#767676" />
              <TextInput
                style={styles.inputField}
                placeholder="Enter your username"
                placeholderTextColor={'#767676'}
              />
            </View>
          </View>
          <View style={styles.bodyChildview}>
            <Text style={styles.bodyTxt}>Password</Text>
            <View style={styles.inputFieldView}>
              <Icons name="lock-outline" size={25} color="#767676" />
              <TextInput
                style={styles.inputField}
                placeholder="**** **** ****"
                placeholderTextColor={'#767676'}
                secureTextEntry={isShow}
              />
              <TouchableOpacity onPress={() => setIsShow(!isShow)}>
                <Icon
                  name={isShow ? 'eye-off' : 'eye'}
                  size={20}
                  color="#767676"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bodyChildview}>
            <PrimaryButton
              text="Submit"
              style={styles.sbumitView}
              textstyle={styles.submitTxt}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEmployee;
