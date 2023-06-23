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
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: '#1E1C1C',
    fontWeight: '700',
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
  txtStyle: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontFamily: ConstantKeys.MUKTA,
    color: '#868686',
    paddingLeft: wp(2),
  },
  showView: {
    alignSelf: 'flex-end',
    top: -28,
    left: -15,
    marginBottom: hp(-3),
  },
  registerField: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: hp(4.5),
    width: wp(80),
    borderColor: '#77869D',
    borderRadius: 30,
    paddingHorizontal: wp(4),
  },
  registerTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontFamily: ConstantKeys.MUKTA,
    fontWeight: '400',
  },
  selectModalView: {
    paddingHorizontal: wp(5),
    paddingTop: hp(3),
    paddingBottom: hp(1),
    marginTop: hp(-2.5),
    zIndex: -1,
    borderBottomWidth: 2,
    borderBottomColor: '#77869D',
    borderLeftWidth: 2,
    borderRightColor: '#77869D',
    borderRightWidth: 2,
    borderLeftColor: '#77869D',
    borderTopWidth: 0,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  modalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectModalTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontFamily: ConstantKeys.MUKTA,
    fontWeight: '400',
    marginLeft: wp(2),
  },
});
