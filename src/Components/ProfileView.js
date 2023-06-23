import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMG} from '../Constants/ImageConstant';
import {colors} from '../Utils/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SetFontSize} from '../Utils/FontSize';
import PrimaryButton from './PrimaryButton';
import {ConstantKeys} from '../Utils/ConstantKey';

const ProfileView = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.editView}>
        <TouchableOpacity>
          <Image
            source={IMG.ExtraLogo.editButton}
            resizeMode="center"
            style={styles.editImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <View>
          <Image
            style={styles.profilePic}
            source={IMG.ExtraLogo.profilePIc}
            resizeMode="center"
          />
        </View>
        <View style={styles.childContainer}>
          <View style={styles.nameView}>
            <Text style={styles.nameTxt}>Sabariya Muzumder</Text>
            <Image
              style={styles.valueIcons}
              source={IMG.ValueIcons.Basic}
              resizeMode="center"
            />
          </View>
          <View>
            <Text style={styles.userTxt}>sabariyamuzumder9921@gmail.com</Text>
            <Text style={styles.userTxt}>Cell: +1-9947792172</Text>
            <Text style={styles.userTxt}>United States</Text>
          </View>
          <View style={styles.buttonView}>
            <PrimaryButton
              text={'Statistics'}
              style={styles.statisticsButton}
              textstyle={styles.staticticTxt}
              onPress={onPress}
            />
            <PrimaryButton
              text={'Update Plan'}
              style={styles.updatePlanButton}
              textstyle={styles.updateTxt}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: '#FDFDFD',
    position: 'absolute',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  profilePic: {
    height: 100,
    width: 100,
    marginTop: 5,
  },
  editView: {
    marginTop: hp(1),
    width: wp(8),
    alignSelf: 'flex-end',
  },
  editImg: {
    height: hp(4),
    width: wp(6.5),
    alignSelf: 'flex-end',
  },
  editLine: {
    alignSelf: 'flex-end',
    height: 3,
    width: 22,
    backgroundColor: '#D40101',
    marginRight: 5,
  },
  childContainer: {marginLeft: wp(4), marginTop: hp(0.7)},
  nameTxt: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.BLACK,
    marginRight: 5,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  userTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    marginBottom: hp(0.1),
    fontFamily: ConstantKeys.MUKTA,
    fontWeight: '300',
  },
  buttonView: {
    height: hp(4.5),
    width: wp(58),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(1),
  },
  statisticsButton: {
    height: hp(4),
    width: wp(25),
    backgroundColor: '#0D8F29',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  staticticTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.WHITE,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: ConstantKeys.MUKTA,
  },
  updatePlanButton: {
    height: hp(4),
    width: wp(28),
    backgroundColor: '#081C3B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft: wp(5),
  },
  updateTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.WHITE,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: ConstantKeys.MUKTA,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueIcons: {
    height: hp(3),
    width: wp(6),
  },
});
export default ProfileView;
