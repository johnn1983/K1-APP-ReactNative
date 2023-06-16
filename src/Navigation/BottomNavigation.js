/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import BudgetDetails from '../Screens/BudgetDetails/BudgetDetails';
import ExpenseAnalytics from '../Screens/ExpenseAnalytics/ExpenseAnalytics';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ExpenseDetails from '../Screens/ExpenseDetails/ExpenseDetails';
import Scanner from '../Screens/Scanner/Scanner';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

export default function Footer({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Scanner"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#454545',
        tabBarInactiveTintColor: '#A1A1A1',
        tabBarStyle: {
          borderTopColor: 'black',
          paddingHorizontal: 15,
          paddingVertical: 10,
        },
      }}>
      <Tab.Screen
        name="BudgetDetails"
        component={BudgetDetails}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icons
              style={styles.iconstyle}
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExpenseDetails"
        component={ExpenseDetails}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icons
              style={styles.iconstyle}
              name="ios-hourglass-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icons
              style={styles.iconstyle}
              name="library-sharp"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExpenseAnalytics"
        component={ExpenseAnalytics}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icons
              style={styles.iconstyle}
              name="library-sharp"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icons
              style={styles.iconstyle}
              name="settings-sharp"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconstyle: {
    fontSize: 25,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    shadowOffset: {width: 0, height: 1},
    elevation: 5,
  },
});
