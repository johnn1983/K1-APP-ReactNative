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
    marginHorizontal: hp(10),
  },
  heading: {
    marginTop: hp(4),
    fontSize: SetFontSize.setDimension.textHighSize,
    color: colors.BLACK,
    fontFamily: ConstantKeys.INTER_EXTRABOLD,
  },
  text: {
    marginTop: hp(3),
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
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
    paddingVertical: hp(1.6),
    borderRadius: 30,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: 'white',
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
  },
});
