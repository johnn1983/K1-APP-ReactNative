import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../Utils/FontSize';
import {colors} from '../../Utils/colors';
import {ConstantKeys} from '../../Utils/ConstantKey';
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
    fontFamily: ConstantKeys.INTER_EXTRABOLD,
  },
  text2: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: '#BDB8B8',
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '500',
  },
  text: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontFamily: ConstantKeys.INTER_MEDIUM,
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
    paddingVertical: hp(0.8),
    borderRadius: 30,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    borderColor: '#9FC0F1',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.WHITE,
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
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
    fontSize: SetFontSize.setDimension.textSizeExtraLarge,
    fontFamily: ConstantKeys.URBANIST_BOLD,
    color: '#A19C9C',
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: '#77869D',
    backgroundColor: colors.WHITE,
  },
  codeInputHighlightStyle: {
    borderColor: colors.GREY,
    fontSize: SetFontSize.setDimension.textSizeExtraLarge,
    fontFamily: ConstantKeys.URBANIST_BOLD,
    color: colors.DARK_GREY,
  },
  signupTxt: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
});
