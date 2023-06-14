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

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="PromoCodeScreen" component={PromoCodeScreen} />
        <Stack.Screen name="PlanSelection" component={PlanSelection} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} /> */}
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
