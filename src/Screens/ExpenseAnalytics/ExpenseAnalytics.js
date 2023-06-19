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
import BottomNavigation from '../../Components/BottomNavigation';
import Scanner from '../Scanner/Scanner';
import BudgetDetails from '../BudgetDetails/BudgetDetails';
import ExpenseDetails from '../ExpenseDetails/ExpenseDetails';
import AnalyticsDetails from '../AnalyticsDetails/AnalyticsDetails';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
              navigation.navigate('AnalyticsDetails', {showBottomTab: true})
            }>
            <Text style={styles.bodyHeaderTxt2}>{view}</Text>
          </TouchableOpacity>
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
            <Icon
              name="calendar-day"
              size={25}
              color="black"
              style={styles.calender}
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
              <View style={styles.hImageLines} />
              <View style={styles.hImageLines} />
              <View style={styles.hImageLines} />
              <View style={styles.hImageLines} />
              <View style={styles.hImageLines} />

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
      {/* 
      <View>
        <BottomNavigation
          onPress={() => navigation.navigate(Scanner)}
          onPressBudget={() => navigation.navigate(BudgetDetails)}
          onPressExpense={() => {
            navigation.navigate(ExpenseDetails);
          }}
        />
      </View> */}
    </View>
  );
};

export default ExpenseAnalytics;
