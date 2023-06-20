import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {IMG} from '../Constants/ImageConstant';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BottomNavigation = ({
  onPress,
  disable,
  onPressBudget,
  onPressExpense,
  onPressAnalytics,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={IMG.Navigation.BottomNavigation}
        resizeMode="center"
        style={styles.bottomNav}
      />
      <View style={styles.buttonView}>
        <View style={styles.scanView}>
          <TouchableOpacity
            style={styles.scanButton}
            disabled={disable}
            onPress={onPress}
            activeOpacity={0.000001}
          />
        </View>
        <View style={styles.bottomButtonView}>
          <TouchableOpacity
            style={styles.budgetButton}
            activeOpacity={0.1}
            onPress={onPressBudget}
          />
          <TouchableOpacity
            style={styles.expenseButton}
            activeOpacity={0.1}
            onPress={onPressExpense}
          />
          <TouchableOpacity
            style={styles.analyticButton}
            activeOpacity={0.1}
            onPress={onPressAnalytics}
          />
          <TouchableOpacity style={styles.profileButton} activeOpacity={0.1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNav: {
    top: -100,
    position: 'absolute',
    height: hp(14.4),
    width: wp(100),
  },
  buttonView: {
    top: -100,
    flexDirection: 'column',
  },
  scanView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(5),
    marginHorizontal: wp(4),
  },
  scanButton: {
    height: hp(7),
    width: wp(14),
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  budgetButton: {
    height: hp(6),
    width: wp(10),
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseButton: {
    height: hp(6),
    width: wp(10),
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(5),
  },
  analyticButton: {
    height: hp(6),
    width: wp(10),
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(5),
  },
  profileButton: {
    height: hp(6),
    width: wp(10),
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BottomNavigation;
