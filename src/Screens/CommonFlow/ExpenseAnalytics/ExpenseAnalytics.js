/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';

import styles from './ExpenseAnalyticsStyle';

import {IMG} from '../../../Constants/ImageConstant';
import AnalyticsDetails from '../../CommonFlow/AnalyticsDetails/AnalyticsDetails';
import Icon from 'react-native-vector-icons/FontAwesome5';

const analyticsData = [
  {
    id: 1,
    date: '22 Apr-2023',
    reason: 'Yes',
    amount: '100.00',
    subcategory: 'Vehicle Expense',
    view: 'View',
  },
  {
    id: 2,
    date: '22 Apr-2023',
    reason: 'Yes',
    amount: '100.00',
    subcategory: 'Vehicle Expense',
    view: 'View',
  },
  {
    id: 3,
    date: '22 Apr-2023',
    reason: 'Yes',
    amount: '100.00',
    subcategory: 'Vehicle Expense',
    view: 'View',
  },
];

const categoryType = [
  {id: 1, name: 'Business Insurance', type: 'General', color: '#D06426'},
  {id: 2, name: 'Entertainment Expense', type: 'General', color: '#A93DE8'},
  {id: 3, name: 'Website Expense', type: 'General', color: '#8DABE1'},
  {id: 4, name: 'Taxes', type: 'Company', color: '#D06426'},
  {id: 5, name: 'Vehicle Expense', type: 'Company', color: '#A93DE8'},
  {id: 6, name: 'Employee Benefits', type: 'Company', color: '#8DABE1'},
  {id: 7, name: 'Payroll', type: 'Company', color: '#4E88DF'},
  {id: 8, name: 'Entertainment Expense', type: 'Employee', color: '#4E88DF'},
  {id: 9, name: 'Device Expense', type: 'Employee', color: '#52DC71'},
  {id: 10, name: 'Vehicle Expense', type: 'Employee', color: '#CE7DE2'},
  {id: 11, name: 'Office Supplie', type: 'Employee', color: '#E4B949'},
  {
    id: 12,
    name: 'Website and Software Expenses',
    type: 'Employee',
    color: '#EC5656',
  },
  {
    id: 13,
    name: 'Advertising and Marketing ',
    type: 'Employee',
    color: '#33cccc',
  },
  {id: 14, name: 'Business Insurance', type: 'Employee', color: '#ffffb3'},
];

const ExpenseAnalytics = ({navigation, route}) => {
  const registerType = route.params.registerType;

  const TableView = ({date, reason, amount, subcategory, view}) => {
    return (
      <View style={styles.bodyHeaderView}>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{date}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{reason}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{amount}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{subcategory}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AnalyticsDetails', {
                registerType: registerType,
              })
            }>
            <Text style={styles.bodyHeaderTxt2}>{view}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        {registerType === 'General' ? (
          <View style={styles.headerView}>
            <Text style={styles.headerTxt}>Expense Analytics</Text>
          </View>
        ) : (
          <View style={styles.headerView2}>
            <Text style={styles.headerTxt2}>Expense Analytics</Text>
          </View>
        )}

        <ScrollView
          style={styles.mainView}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity>
            <Icon
              name="calendar-day"
              size={25}
              color="black"
              style={styles.calender}
            />
          </TouchableOpacity>

          <View style={styles.chartImg}>
            {registerType === 'General' && (
              <Image source={IMG.Chart.GeneralChart} />
            )}
            {registerType === 'Company' && (
              <Image source={IMG.Chart.CompanyChart} />
            )}
            {registerType === 'Employee' && (
              <Image source={IMG.Chart.EmployeeChart} />
            )}
          </View>

          <View style={styles.categoryTxtView}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={
                registerType === 'General'
                  ? categoryType.filter(item => item.type === 'General')
                  : registerType === 'Company'
                  ? categoryType.filter(item => item.type === 'Company')
                  : registerType === 'Employee'
                  ? categoryType.filter(item => item.type === 'Employee')
                  : categoryType
              }
              renderItem={({item}) => (
                <View style={styles.categoryView}>
                  <Text style={styles.txtStyle} numberOfLines={3}>
                    {item.name}
                  </Text>
                  <View
                    style={{...styles.thirdLine, backgroundColor: item.color}}
                  />
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={styles.tableHeaderView}>
            <View style={styles.tableHeaderTxtView}>
              <Text style={styles.tableHeadTxt}>Date</Text>
            </View>
            <View style={styles.tableHeaderTxtView}>
              <Text style={styles.tableHeadTxt}>Expense Reason</Text>
            </View>
            <View style={styles.tableHeaderTxtView}>
              <Text style={styles.tableHeadTxt}>Expense Amount</Text>
            </View>
            <View style={styles.tableHeaderTxtView}>
              <Text style={styles.tableHeadTxt}>Sub Category Name</Text>
            </View>
            <View style={styles.tableHeaderTxtView}>
              <Text style={styles.tableHeadTxt}>View Receipt</Text>
            </View>
          </View>

          <View style={styles.flatlistView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={analyticsData}
              renderItem={({item}) => (
                <TableView
                  date={item.date}
                  reason={item.reason}
                  amount={item.amount}
                  subcategory={item.subcategory}
                  view={item.view}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExpenseAnalytics;
