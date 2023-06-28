import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './EmployeeListStyle';

import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

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
  {id: 15, name: ' Akther'},
];

const EmployeeList = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default EmployeeList;
