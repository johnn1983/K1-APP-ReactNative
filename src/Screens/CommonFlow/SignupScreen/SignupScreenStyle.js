import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../../Utils/FontSize';
import {colors} from '../../../Utils/colors';
import {ConstantKeys} from '../../../Utils/ConstantKey';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingBottom: hp(5),
  },
  logo: {
    marginTop: hp(-5),
    justifyContent: 'center',
    marginBottom: hp(-8),
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: hp(10),
  },
  headerText: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: 'black',
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: hp(1),
  },
  line: {
    marginTop: hp(0.5),
    height: hp(0.5),
    width: wp(30),
    backgroundColor: '#081588',
  },
  childcontainer: {
    marginTop: hp(2),
  },
  bodyPart: {
    marginTop: hp(2),
    marginBottom: hp(5),
  },
  bodyTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: '#1E1C1C',
    fontWeight: '500',
    marginBottom: hp(1),
    fontFamily: ConstantKeys.MUKTA,
  },
  buttonContainer: {
    marginHorizontal: wp(24),
    marginBottom: hp(2),
    marginTop: hp(5),
  },
  primaryButton: {
    height: hp(6),
    width: wp(75),
    backgroundColor: '#255A98',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: 20,
    borderColor: '#9FC0F1',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.WHITE,
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '700',
  },
  forgetTxt: {
    textAlign: 'center',
    color: '#868686',
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontFamily: ConstantKeys.INTER_REGULAR,
    marginBottom: hp(4),
  },
  bottomButton: {
    alignSelf: 'center',
  },
  signupTxt: {
    flexDirection: 'row',
    marginTop: hp(0.5),
  },
  text1: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: '#818D9B',
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '600',
  },
  text2: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '600',
  },
  pickerStyle: {
    zIndex: 1,
    flex: 1,
    flexBasis: 0,
  },
  placeStyle: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontFamily: ConstantKeys.MUKTA,
    color: colors.BLACK,
    paddingLeft: wp(1),
    fontWeight: '500',
  },
  txtStyle: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontFamily: ConstantKeys.MUKTA,
    color: '#868686',
    paddingLeft: wp(2),
  },
  pickerSize: {
    height: hp('6%'),
    borderWidth: 2,
    borderColor: '#77869D',
    borderRadius: 30,
    marginTop: hp(0.5),
  },
  itemSelect: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '600',
  },
  dropdownContainer: {
    borderWidth: 2,
    borderColor: '#77869D',
    borderRadius: 30,
  },
  showView: {
    alignSelf: 'flex-end',
    top: -28,
    left: -15,
    marginBottom: hp(-3),
  },
});
