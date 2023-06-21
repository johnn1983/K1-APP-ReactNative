/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './AddEmployeeStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../../Components/PrimaryButton';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

const AddEmployee = ({navigation, route}) => {
  const [screenType, setScreenType] = useState(route.params.screenType);
  const [isShow, setIsShow] = useState(true);

  const EmployeesList = [
    {id: 1, name: 'Nabila Akther'},
    {id: 2, name: 'Sabariya Muzumder'},
    {id: 3, name: 'Nabila Akther'},
    {id: 4, name: 'Sabariya Muzumder'},
    {id: 5, name: 'Nabila Akther'},
    {id: 6, name: 'Sabariya Muzumder'},
    {id: 7, name: 'Nabila Akther'},
    {id: 8, name: 'Sabariya Muzumder'},
    {id: 9, name: 'Nabila Akther'},
    {id: 10, name: 'Sabariya Muzumder'},
    {id: 11, name: 'Nabila Akther'},
    {id: 12, name: 'Sabariya Muzumder'},
    {id: 13, name: 'Nabila Akther'},
    {id: 14, name: 'Sabariya Muzumder'},
    {id: 15, name: 'Nabila Akther'},
  ];

  const AddDetails = () => {
    return (
      <View style={styles.container}>
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
                <Icon name="email" size={20} color="#767676" />
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
                onPress={() => setScreenType('EmployeeList')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  const EmployeeList = () => {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>Employee List</Text>
        </View>
        <View style={styles.bodyView}>
          <FlatList
            data={EmployeesList}
            renderItem={({item}) => (
              <View style={styles.listTxtView}>
                <Text style={styles.listTxt}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.buttonView}
                  onPress={() =>
                    navigation.navigate('EmployeeDetails', {
                      userName: item.name,
                    })
                  }>
                  <Text style={styles.buttonTxt}>Details</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  };

  return screenType === 'AddEmployee' ? (
    <AddDetails />
  ) : screenType === 'EmployeeList' ? (
    <EmployeeList />
  ) : null;
};

export default AddEmployee;
