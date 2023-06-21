import React from 'react'; //React Component
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator(); //Create Stack Navigation (Variable)

import IntroScreen from '../Screens/CommonFlow/IntroScreen/IntroScreen';
import LoginScreen from '../Screens/CommonFlow/LoginScreen/LoginScreen';
import SignupScreen from '../Screens/CommonFlow/SignupScreen/SignupScreen';
import PromoCodeScreen from '../Screens/CommonFlow/PromoCodeScreen/PromoCodeScreen';
import PlanSelection from '../Screens/CommonFlow/PlanSelection/PlanSelection';
import PaymentMethod from '../Screens/CommonFlow/PaymentMethod/PaymentMethod';
import ProfileScreen from '../Screens/CommonFlow/ProfileScreen/ProfileScreen';
import Statistics from '../Screens/CommonFlow/Statistics/Statistics';
import Scanner from '../Screens/GeneralFlow/Scanner/Scanner';
import BudgetDetails from '../Screens/CommonFlow/BudgetDetails/BudgetDetails';
import ExpenseDetails from '../Screens/ExpenseDetails/ExpenseDetails';
import ExpenseAnalytics from '../Screens/ExpenseAnalytics/ExpenseAnalytics';
import CategoryView from '../Screens/CommonFlow/CategoryView/CategoryView';
import AnalyticsDetails from '../Screens/AnalyticsDetails/AnalyticsDetails';
import BottomNav from './BottomNav';
import ScanReceipt from '../Screens/CompanyFlow/ScanReceipt/ScanReceipt';
import AddEmployee from '../Screens/CompanyFlow/AddEmployee/AddEmployee';
import EmployeeDetails from '../Screens/CompanyFlow/EmployeeDetails/EmployeeDetails';
import ReceiptList from '../Screens/CompanyFlow/ReceiptList/ReceiptList';

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="PromoCodeScreen" component={PromoCodeScreen} />
        <Stack.Screen name="PlanSelection" component={PlanSelection} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="BudgetDetails" component={BudgetDetails} />
        <Stack.Screen name="ExpenseDetails" component={ExpenseDetails} />
        <Stack.Screen name="ExpenseAnalytics" component={ExpenseAnalytics} />
        <Stack.Screen name="CategoryView" component={CategoryView} />
        <Stack.Screen name="AnalyticsDetails" component={AnalyticsDetails} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="ScanReceipt" component={ScanReceipt} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
        <Stack.Screen name="ReceiptList" component={ReceiptList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
