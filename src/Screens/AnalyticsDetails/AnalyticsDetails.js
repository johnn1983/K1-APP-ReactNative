/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';

import styles from './AnalyticsDetailsStyle';

import BottomNavigation from '../../Components/BottomNavigation';
import Scanner from '../Scanner/Scanner';
import BudgetDetails from '../BudgetDetails/BudgetDetails';
import ExpenseDetails from '../ExpenseDetails/ExpenseDetails';
import PrimaryButton from '../../Components/PrimaryButton';
import BottomNav from '../../Navigation/BottomNav';

const AnalyticsDetails = ({navigation}) => {
  const [selectedButton, setSelectedButton] = useState('Entertainment');
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
            onPress={() => navigation.navigate(AnalyticsDetails)}>
            <Text style={styles.bodyHeaderTxt2}>{view}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const Details = ({expense, amount}) => {
    return (
      <>
        <View style={styles.detailsView}>
          <View style={styles.leftDetails}>
            <Text numberOfLines={2} style={styles.detailsTxt}>
              {expense}
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.rightDetails}>
            <Text numberOfLines={1} style={styles.detailsTxt}>
              {amount}$
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
      </>
    );
  };
  const LeftButtonView = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.leftChildView}>
        <PrimaryButton
          text={'Entertainment'}
          style={
            selectedButton === 'Entertainment'
              ? styles.selleftbutton
              : styles.leftButton
          }
          textstyle={
            selectedButton === 'Entertainment'
              ? styles.selbuttonTxt
              : styles.buttonTxt
          }
          onPress={() => setSelectedButton('Entertainment')}
        />
        <PrimaryButton
          text={'Device Expense'}
          style={
            selectedButton === 'Device Expense'
              ? styles.selleftbutton
              : styles.leftButton
          }
          textstyle={
            selectedButton === 'Device Expense'
              ? styles.selbuttonTxt
              : styles.buttonTxt
          }
          onPress={() => setSelectedButton('Device Expense')}
        />
        <PrimaryButton
          text={'Vehicle Expense'}
          style={
            selectedButton === 'Vehicle Expense'
              ? styles.selleftbutton
              : styles.leftButton
          }
          textstyle={
            selectedButton === 'Vehicle Expense'
              ? styles.selbuttonTxt
              : styles.buttonTxt
          }
          onPress={() => setSelectedButton('Vehicle Expense')}
        />
        <PrimaryButton
          text={'Office Supplies'}
          style={
            selectedButton === 'Office Supplies'
              ? styles.selleftbutton
              : styles.leftButton
          }
          textstyle={
            selectedButton === 'Office Supplies'
              ? styles.selbuttonTxt
              : styles.buttonTxt
          }
          onPress={() => setSelectedButton('Office Supplies')}
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>Expense Analytics</Text>
        </View>

        <View style={styles.mainView}>
          <View style={styles.mainLeftView}>
            <LeftButtonView />
          </View>

          <View style={styles.mainRightView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.rightChildView}>
              <View style={{alignItems: 'center', width: '100%'}}>
                <View style={styles.rightTopView}>
                  <View style={styles.rightHeadView}>
                    <Text style={styles.rightHeadTxt}>Overall</Text>
                  </View>
                  <View style={styles.mainDetailsView}>
                    <Details expense={'Total Budget'} amount={'7200'} />
                    <Details expense={'Entertainment/year'} amount={'3000'} />
                    <Details expense={'Expanded'} amount={'161.10'} />
                    <Details expense={'Remaining'} amount={'2838.90'} />
                  </View>
                  <View style={styles.rightHeadView}>
                    <Text style={styles.rightHeadTxt}>Monthly</Text>
                  </View>
                  <View style={styles.mainDetailsView}>
                    <Details expense={'Filter'} amount={'7200'} />
                    <Details
                      expense={'Budget Expense/month'}
                      amount={'600.00'}
                    />
                    <Details
                      expense={'Entertainment/month'}
                      amount={'250.00'}
                    />
                    <Details expense={'Expense in April'} amount={'87.05'} />
                    <Details expense={'Remain in April'} amount={'162.95'} />
                    <Details expense={'Expense till April'} amount={'161.1'} />
                    <Details
                      expense={'Expense Threshold till April'}
                      amount={'1000.00'}
                    />
                  </View>
                </View>
                <View style={styles.rightBottomView}>
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
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AnalyticsDetails;
