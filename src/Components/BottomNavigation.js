import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../Utils/colors';
import {IMG} from '../Constants/ImageConstant';
import {SetFontSize} from '../Utils/FontSize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BottomNavigation = ({onPress, disable}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disable}
        style={styles.scanView}
        onPress={onPress}>
        <Image source={IMG.BottomIcon.Scan} resizeMode="contain" />
      </TouchableOpacity>

      <View style={styles.bottomView}>
        <View style={styles.bView}>
          <TouchableOpacity style={styles.buttonView}>
            <Image
              style={styles.img}
              source={IMG.BottomIcon.Budget}
              resizeMode="center"
            />
            <Text style={styles.bottomTxt}>Budget</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <Image
              style={styles.img}
              source={IMG.BottomIcon.Expense}
              resizeMode="center"
            />
            <Text style={styles.bottomTxt}>Expenses</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.spaceView} />

        <View style={styles.bView}>
          <TouchableOpacity style={styles.buttonView}>
            <Image
              style={styles.img}
              source={IMG.BottomIcon.Analytics}
              resizeMode="center"
            />
            <Text style={styles.bottomTxt}>Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <Image
              style={styles.img2}
              source={IMG.BottomIcon.Profile}
              resizeMode="center"
            />
            <Text style={styles.bottomTxt}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  scanView: {
    alignSelf: 'center',
    marginBottom: -22,
    marginTop: -35,
    zIndex: 9,
  },
  bottomView: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: '#E5E2E2',
  },
  bView: {
    flex: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceView: {
    flex: 0.8,
  },
  buttonView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 40,
    width: 45,
  },
  img2: {
    height: 40,
    width: 35,
  },
  bottomTxt: {
    color: '#847C7C',
    fontSize: SetFontSize.setDimension.textSizeSmall,
    fontWeight: '600',
  },
});
export default BottomNavigation;
