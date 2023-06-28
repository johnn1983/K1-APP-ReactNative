/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../Utils/colors';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import BudgetDetails from '../Screens/GeneralFlow/BudgetDetails/BudgetDetails';
import ExpenseAnalytics from '../Screens/CommonFlow/ExpenseAnalytics/ExpenseAnalytics';
import ProfileScreen from '../Screens/CommonFlow/ProfileScreen/ProfileScreen';
import ExpenseDetails from '../Screens/GeneralFlow/ExpenseDetails/ExpenseDetails';
import Scanner from '../Screens/GeneralFlow/Scanner/Scanner';
import ScanReceipt from '../Screens/CompanyFlow/ScanReceipt/ScanReceipt';
import UpdateBudget from '../Screens/CompanyFlow/UpdateBudget/UpdateBudget';
import ExpenseList from '../Screens/CompanyFlow/ExpenseList/ExpenseList';
import {AnalyticsStack} from './StackNavigation';
import {EmployeeDetailsStack} from './StackNavigation';

import {LogBox} from 'react-native';
import {IMG} from '../Constants/ImageConstant';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

export default function BottomNav({navigation, route}) {
  const registerType = route?.params?.registerType;
  return registerType === 'General' ? (
    <Tab.Navigator
      initialRouteName="Scanner"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarBackground: () => (
          <View style={styles.logoContainer}>
            <Image
              source={IMG.Navigation.BackLogo}
              style={styles.backgImage}
              resizeMode="cover"
            />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: colors.BG_WHITE,
          height: hp(10),
          shadowColor: colors.BG_WHITE,
          zIndex: 99,
          shadowOffset: {height: 0, width: 0},
          borderTopColor: 'transparent',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="BudgetDetails"
        component={BudgetDetails}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
      <Tab.Screen
        name="ExpenseDetails"
        component={ExpenseDetails}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <HideWithKeyboard>
              <View style={{top: hp(-5), borderRadius: 50}}>
                <Image
                  source={IMG.BottomIcon.Scan}
                  resizeMode="center"
                  style={styles.scanIcon}
                />
              </View>
            </HideWithKeyboard>
          ),
        }}
      />
      <Tab.Screen
        name="AnalyticsStack"
        component={AnalyticsStack}
        initialParams={{registerType: registerType}}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      initialRouteName="EmployeeDetailsStack"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarBackground: () => (
          <View style={styles.logoContainer}>
            <Image
              source={IMG.Navigation.BackLogo}
              style={styles.backgImage}
              resizeMode="cover"
            />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: colors.BG_WHITE,
          height: hp(10),
          shadowColor: colors.BG_WHITE,
          zIndex: 99,
          shadowOffset: {height: 0, width: 0},
          borderTopColor: 'transparent',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="UpdateBudget"
        component={UpdateBudget}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
      <Tab.Screen
        name="ExpenseList"
        component={ExpenseList}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
      <Tab.Screen
        name="EmployeeDetailsStack"
        component={EmployeeDetailsStack}
        initialParams={{registerType: registerType}}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <HideWithKeyboard>
              <View style={{top: hp(-5), borderRadius: 50}}>
                <Image
                  source={IMG.BottomIcon.Scan}
                  resizeMode="center"
                  style={styles.scanIcon}
                />
              </View>
            </HideWithKeyboard>
          ),
        }}
      />
      <Tab.Screen
        name="AnalyticsStack"
        component={AnalyticsStack}
        initialParams={{registerType: registerType}}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View style={{backgroundColor: 'transparent'}} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconstyle: {
    height: hp(5),
  },
  scanIcon: {
    height: hp(8),
    width: wp(18),
  },
  txtStyle: {},
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    height: hp(10),
    width: wp(100),
  },
  backgImage: {
    width: wp(100),
    height: hp(10),
  },
});
