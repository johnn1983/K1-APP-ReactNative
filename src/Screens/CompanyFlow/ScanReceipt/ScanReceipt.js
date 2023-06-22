/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ScanReceiptStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IMG} from '../../../Constants/ImageConstant';
import AddEmployee from '../AddEmployee/AddEmployee';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

const ScanReceipt = ({navigation, route}) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerType = route.params.registerType;

  const EmployeeView = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}>
        <View onTouchEnd={() => setIsOpen(false)}>
          <View style={styles.modalmainView}>
            {
              registerType === 'Company' ? (
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={styles.modalList}
                    onPress={() =>
                      navigation.navigate('AddEmployee', {
                        screenType: 'AddEmployee',
                      })
                    }>
                    <Icon name="play-arrow" size={15} color="black" />
                    <Text style={styles.modalTxt}>Add New Employee</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalList}
                    onPress={() =>
                      navigation.navigate('AddEmployee', {
                        screenType: 'EmployeeList',
                      })
                    }>
                    <Icon name="play-arrow" size={15} color="black" />
                    <Text style={styles.modalTxt}>Employee List</Text>
                  </TouchableOpacity>
                </View>
              ) : null
              // <View style={styles.modalView}>
              //   <TouchableOpacity
              //     style={styles.modalList}
              //     onPress={() => navigation.navigate(EmployeeDetails)}>
              //     <Icon name="play-arrow" size={15} color="black" />
              //     <Text style={styles.modalTxt}>Budget-Expense Details</Text>
              //   </TouchableOpacity>
              // </View>
            }
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headreMainTxt}>K-1 Receipts</Text>
        <View style={styles.headerRightView}>
          {registerType === 'Company' ? (
            <TouchableOpacity style={styles.headerCompanyView}>
              <Image
                source={IMG.ExtraLogo.companyLogo}
                resizeMode="center"
                style={styles.companyIMG}
              />
              <Text style={styles.headerCompanyTxt}>Company Name</Text>
            </TouchableOpacity>
          ) : registerType === 'Employee' ? (
            <TouchableOpacity
              style={styles.headerCompanyView}
              onPress={() => navigation.navigate(EmployeeDetails)}>
              <Image
                source={IMG.ExtraLogo.companyLogo}
                resizeMode="center"
                style={styles.companyIMG}
              />
              <Text style={styles.headerCompanyTxt}>My Expense</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
            <Icon name="more-vert" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bodyView}>
        <View style={styles.bodyChildView}>
          <Image
            source={IMG.ExtraLogo.BankReceipt}
            resizeMode="center"
            style={styles.bankReceiptImg}
          />
          <Text style={styles.scanTxt}>Tap to scan a Reciept</Text>
        </View>
      </View>

      {EmployeeView()}
    </SafeAreaView>
  );
};

export default ScanReceipt;
