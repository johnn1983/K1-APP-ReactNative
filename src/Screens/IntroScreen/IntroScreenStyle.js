import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../Utils/FontSize';
import {colors} from '../../Utils/colors';
import {ConstantKeys} from '../../Utils/ConstantKey';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CommonActions} from '@react-navigation/native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp(11),
  },
  heading: {
    marginTop: hp(4),
    fontSize: SetFontSize.setDimension.textHighSize,
    color: colors.BLACK,
    fontFamily: ConstantKeys.ACME,
    fontWeight: '400',
  },
  text: {
    marginTop: hp(3),
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontFamily: ConstantKeys.ACME,
    textAlign: 'center',
    fontWeight: '400',
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'center',
  },
  primaryButton: {
    height: hp(7),
    width: wp(38),
    backgroundColor: '#6D27C6',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    paddingBottom: hp(0.5),
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: '#EDF1F2',
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '700',
  },
});
