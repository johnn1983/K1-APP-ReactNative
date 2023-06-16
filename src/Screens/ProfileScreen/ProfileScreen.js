/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

import styles from './ProfileScreenStyle';
import ProfileView from '../../Components/ProfileView';
import TextField from '../../Components/TextField';
import BottomNavigation from '../../Components/BottomNavigation';
import Statistics from '../Statistics/Statistics';
import Scanner from '../Scanner/Scanner';
import BudgetDetails from '../BudgetDetails/BudgetDetails';
import ExpenseDetails from '../ExpenseDetails/ExpenseDetails';
import ExpenseAnalytics from '../ExpenseAnalytics/ExpenseAnalytics';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.25}}>
        <ProfileView onPress={() => navigation.navigate(Statistics)} />
      </View>

      <View style={styles.bodyView}>
        <Text style={styles.headerTxt}>Your Info</Text>
        <View style={styles.line} />

        <View style={styles.bodyChildView}>
          <View style={styles.detailView}>
            <Text style={styles.detailText}>Business Name</Text>
            <TextField placeholder={'10 Minute School'} />
          </View>

          <View style={styles.detailView}>
            <Text style={styles.detailText}>Products & Services</Text>
            <TextField placeholder={'Services'} />
          </View>

          <View style={styles.detailView}>
            <Text style={styles.detailText}>Line of Business / Industry</Text>
            <TextField placeholder={'XXXXXX'} />
          </View>

          <View style={styles.detailView}>
            <Text style={styles.detailText}>Corporate Type</Text>
            <TextField placeholder={'LLC'} />
          </View>
        </View>
      </View>
      <View>
        <BottomNavigation
          onPress={() => navigation.navigate(Scanner)}
          onPressBudget={() => navigation.navigate(BudgetDetails)}
          onPressExpense={() => navigation.navigate(ExpenseDetails)}
          onPressAnalytics={() => navigation.navigate(ExpenseAnalytics)}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
