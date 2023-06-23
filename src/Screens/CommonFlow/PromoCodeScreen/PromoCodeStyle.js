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
  },
  logo: {
    marginTop: hp(-5),
    justifyContent: 'center',
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: hp(10),
  },
  heading: {
    marginTop: hp(-4),
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontFamily: ConstantKeys.MUKTA,
    fontWeight: '500',
  },
  text2: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: '#BDB8B8',
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: '#81061C',
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonContainer: {
    marginTop: hp(4),
  },
  primaryButton: {
    height: hp(6),
    width: wp(30),
    backgroundColor: '#081C3C',
    paddingHorizontal: wp(5),
    borderRadius: 30,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    borderColor: '#9FC0F1',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.WHITE,
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '700',
  },
  ViewOTP: {
    marginTop: hp(2),
    marginHorizontal: wp(5),
    backgroundColor: colors.WHITE,
  },
  Otpinputview: {
    height: 50,
    marginHorizontal: wp(7),
    backgroundColor: colors.WHITE,
  },
  codeInputFieldStyle: {
    borderRadius: 6,
    color: '#A19C9C',
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: '#77869D',
    backgroundColor: colors.WHITE,
    fontSize: SetFontSize.setDimension.testSize22,
    fontFamily: ConstantKeys.MUKTA,
    fontWeight: '700',
  },
  codeInputHighlightStyle: {
    borderColor: colors.BLACK,
    fontSize: SetFontSize.setDimension.textSizeExtraLarge,
    fontFamily: ConstantKeys.URBANIST_BOLD,
    color: colors.DARK_GREY,
  },
  signupTxt: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
});
