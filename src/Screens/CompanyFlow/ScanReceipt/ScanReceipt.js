/* eslint-disable react/no-unstable-nested-components */
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './ScanReceiptStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IMG} from '../../../Constants/ImageConstant';
import AddEmployee from '../AddEmployee/AddEmployee';

const ScanReceipt = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

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
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headreMainTxt}>K-1 Receipts</Text>
        <View style={styles.headerRightView}>
          <View style={styles.headerCompanyView}>
            <Image source={IMG.ExtraLogo.companyLogo} resizeMode="center" />
            <Text style={styles.headerCompanyTxt}>Company Name</Text>
          </View>
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
    </View>
  );
};

export default ScanReceipt;
