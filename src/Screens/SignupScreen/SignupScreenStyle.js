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
    marginBottom: hp(-9),
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: hp(10),
  },
  headerText: {
    fontSize: SetFontSize.setDimension.textSize21,
    color: 'black',
    fontFamily: ConstantKeys.INTER_MEDIUM,
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
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
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
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: '#818D9B',
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
    fontWeight: '700',
  },
  text2: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
    fontWeight: '700',
  },
});
