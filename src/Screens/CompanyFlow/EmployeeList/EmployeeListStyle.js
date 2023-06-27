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
    backgroundColor: colors.BG_WHITE,
  },
  headerView: {
    height: hp(4),
    width: wp(100),
    backgroundColor: '#3461A6',
    justifyContent: 'center',
    paddingLeft: wp(7),
    marginTop: hp(2),
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.WHITE,
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
  },
  bodyView: {flex: 1, marginTop: hp(2)},
  bodyView2: {flex: 1, marginTop: hp(4), marginHorizontal: wp(6)},
  listTxtView: {
    height: hp(5),
    backgroundColor: colors.WHITE,
    marginHorizontal: wp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 1,
    marginTop: hp(1),
    marginBottom: hp(2),
    borderRadius: 10,
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.8),
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  listTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontWeight: '400',
    fontFamily: ConstantKeys.MUKTA,
  },
  buttonView: {
    backgroundColor: '#3461A6',
    borderRadius: 5,
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(2),
  },
  buttonTxt: {
    fontSize: SetFontSize.setDimension.textSize10,
    color: colors.WHITE,
    fontWeight: '600',
    fontFamily: ConstantKeys.INTER,
  },
  bodyChildview: {marginTop: hp(1)},
  bodyTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: '#494949',
    fontWeight: '500',
    fontFamily: ConstantKeys.INTER,
  },
  inputFieldView: {
    height: hp(5.5),
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 8,
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: hp(1),
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
  },
  inputField: {
    marginLeft: wp(1),
    width: wp(69),
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.INTER,
    alignSelf: 'center',
  },
  sbumitView: {
    backgroundColor: '#276F97',
    width: wp(40),
    height: hp(5),
    alignSelf: 'center',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: hp(5),
  },
  submitTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.WHITE,
    fontWeight: '400',
    fontFamily: ConstantKeys.POPPINS,
  },
});
