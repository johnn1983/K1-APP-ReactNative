/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import styles from './ExpenseAnalyticsStyle';

import {IMG} from '../../Constants/ImageConstant';
import PrimaryButton from '../../Components/PrimaryButton';
import BottomNavigation from '../../Components/BottomNavigation';
import Scanner from '../Scanner/Scanner';
import BudgetDetails from '../BudgetDetails/BudgetDetails';
import ExpenseDetails from '../ExpenseDetails/ExpenseDetails';

const ExpenseAnalytics = ({navigation}) => {
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

  const TableView = () => {
    return (
      <View style={styles.bodyHeaderView}>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>Date</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>Expense Reason</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>Expense Amount</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>Sub Category Name</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>View Receipt</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>Expense Analytics</Text>
        </View>

        <ScrollView
          style={styles.mainView}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity>
            <Image
              style={styles.calender}
              source={IMG.ExtraLogo.Calender}
              resizeMode="center"
            />
          </TouchableOpacity>
          <View>
            <Image
              style={styles.roundChart}
              source={IMG.ExtraLogo.RoundChart}
              resizeMode="center"
            />
          </View>
          <View style={styles.barView}>
            <View style={styles.barTxtView}>
              <Text style={styles.barTxt}>200</Text>
              <Text style={styles.barTxt}>150</Text>
              <Text style={styles.barTxt}>100</Text>
              <Text style={styles.barTxt}>50</Text>
              <Text style={styles.barTxt}>0</Text>
            </View>
            <View style={styles.barLinesView}>
              <Image
                style={styles.hlines}
                source={IMG.ExtraLogo.Hlines}
                resizeMode="center"
              />
              <Image
                style={styles.vlines}
                source={IMG.ExtraLogo.Vlines}
                resizeMode="center"
              />
            </View>
          </View>
          <View style={styles.allTxtView}>
            <View style={styles.txtView}>
              <Text style={styles.txtStyle}>Business Insurance</Text>
              <View style={styles.firstLine} />
            </View>
            <View>
              <Text style={styles.txtStyle}>Entertainment Expense</Text>
              <View style={styles.secondLine} />
            </View>
            <View>
              <Text style={styles.txtStyle}>Website Expense</Text>
              <View style={styles.thirdLine} />
            </View>
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
          {/* <TableView /> */}
        </ScrollView>
      </View>

      <View>
        <BottomNavigation
          onPress={() => navigation.navigate(Scanner)}
          onPressBudget={() => navigation.navigate(BudgetDetails)}
          onPressExpense={() => {
            navigation.navigate(ExpenseDetails);
          }}
        />
      </View>
    </View>
  );
};

export default ExpenseAnalytics;
