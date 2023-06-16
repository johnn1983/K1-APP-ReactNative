import React from 'react'; //React Component
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator(); //Create Stack Navigation (Variable)

import IntroScreen from '../Screens/IntroScreen/IntroScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import PromoCodeScreen from '../Screens/PromoCodeScreen/PromoCodeScreen';
import PlanSelection from '../Screens/PlanSelection/PlanSelection';
import PaymentMethod from '../Screens/PaymentMethod/PaymentMethod';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Statistics from '../Screens/Statistics/Statistics';
import Scanner from '../Screens/Scanner/Scanner';
import BudgetDetails from '../Screens/BudgetDetails/BudgetDetails';
import ExpenseDetails from '../Screens/ExpenseDetails/ExpenseDetails';
import ExpenseAnalytics from '../Screens/ExpenseAnalytics/ExpenseAnalytics';
import CategoryView from '../Screens/CategoryView/CategoryView';
import AnalyticsDetails from '../Screens/AnalyticsDetails/AnalyticsDetails';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
