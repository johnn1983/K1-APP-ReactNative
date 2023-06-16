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
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: '#081588',
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
    fontWeight: '700',
  },
  line: {
    marginTop: hp(0.5),
    height: hp(0.5),
    width: wp(30),
    backgroundColor: '#081588',
  },
  childcontainer: {
    marginTop: hp(4),
  },
  bodyPart: {
    marginTop: hp(2),
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
    marginTop: hp(3),
    borderRadius: 30,
  },
  primaryButton: {
    height: hp(6),
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
  forgetTxt: {
    textAlign: 'center',
    color: '#868686',
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontFamily: ConstantKeys.INTER_REGULAR,
    marginBottom: hp(4),
  },
  bottomButton: {alignSelf: 'center'},
  primaryButton3: {
    flexDirection: 'row',
    height: hp(6),
    width: wp(65),
    backgroundColor: '#ffffff',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.2),
    borderRadius: 18,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.5,
    elevation: 3,
    shadowRadius: 0.5,
    marginBottom: hp(5),
    borderColor: '#9FC0F1',
    borderWidth: 1,
  },
  buttonText3: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: '#7A7A7A',
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
    fontWeight: '700',
    marginLeft: wp(2),
  },
  primaryButton2: {
    height: hp(6),
    backgroundColor: '#081C3C',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: 18,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    borderColor: '#9FC0F1',
    borderWidth: 1,
  },
  buttonText2: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.WHITE,
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
  },
});
