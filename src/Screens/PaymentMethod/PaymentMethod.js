import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

import styles from './PaymentMethodStyle';
import {IMG} from '../../Constants/ImageConstant';
import TextField from '../../Components/TextField';
import PrimaryButton from '../../Components/PrimaryButton';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import BottomNavigation from '../../Components/BottomNavigation';
import BottomNav from '../../Navigation/BottomNav';

const PaymentMethod = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageView}>
          <Image source={IMG.CompanyLogo.logoBig} resizeMode="center" />
        </View>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>Payment method</Text>
        </View>

        <View style={styles.orderView}>
          <Text style={styles.orderTxt}>Order Total</Text>
          <Text style={styles.orderTxt}>$1500</Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>Select Payment method</Text>
        </View>

        <View style={styles.bankView}>
          <View style={styles.banklogoView}>
            <View style={styles.banknameView}>
              <Image
                style={styles.banklogo}
                source={IMG.ExtraLogo.paypal}
                resizeMode="center"
              />
              <Text style={styles.bankTxt}>Paypal</Text>
            </View>
            <Switch
              style={styles.swithStyle}
              trackColor={{false: 'lightgrey', true: 'lightgrey'}}
              thumbColor={isEnabled ? 'green' : 'red'}
              ios_backgroundColor="#3e3e3e"
              value={isEnabled}
              onValueChange={toggleSwitch}
            />
          </View>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>Billing Information:</Text>
        </View>

        <View style={styles.detailsView}>
          <View style={styles.detailchildView}>
            <Text style={styles.detailsTxt}>Full Name</Text>
            <TextField placeholder={'Enter your full name'} />
          </View>
          <View style={styles.detailchildView}>
            <Text style={styles.detailsTxt}>Email</Text>
            <TextField placeholder={'Enter email address'} />
          </View>
          <View style={styles.detailchildView}>
            <Text style={styles.detailsTxt}>Phone</Text>
            <TextField placeholder={'Enter phone number'} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            text={'Pay'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={() => navigation.navigate(BottomNav)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethod;
