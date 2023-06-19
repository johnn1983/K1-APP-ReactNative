/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BudgetDetails from '../Screens/BudgetDetails/BudgetDetails';
import ExpenseAnalytics from '../Screens/ExpenseAnalytics/ExpenseAnalytics';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ExpenseDetails from '../Screens/ExpenseDetails/ExpenseDetails';
import Scanner from '../Screens/Scanner/Scanner';

import {LogBox} from 'react-native';
import {IMG} from '../Constants/ImageConstant';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

export default function BottomNav({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Scanner"
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              height: hp(10),
              width: wp(100),
            }}>
            <Image
              source={IMG.Navigation.BackLogo}
              style={{
                width: wp(100),
                height: hp(10),
              }}
              resizeMode="cover"
            />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: '#FDFDFD',
          height: hp(10),
          shadowColor: '#FDFDFD',
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
          tabBarIcon: ({color, size}) => (
            <View style={{backgroundColor: 'transparent'}} />
          ),
        }}
      />
      <Tab.Screen
        name="ExpenseDetails"
        component={ExpenseDetails}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={{backgroundColor: 'transparent'}} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={{top: hp(-5), borderRadius: 50}}>
              <Image
                source={IMG.BottomIcon.Scan}
                resizeMode="center"
                style={styles.scanIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ExpenseAnalytics"
        component={ExpenseAnalytics}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={{backgroundColor: 'transparent'}} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={{backgroundColor: 'transparent'}} />
          ),
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
});
