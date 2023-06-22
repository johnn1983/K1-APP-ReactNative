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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2.2),
    marginHorizontal: wp(5),
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
    color: colors.BLACK,
  },
  expenseFlatList: {
    marginTop: hp(1),
    marginBottom: hp(1),
    paddingBottom: hp(7),
  },
  cardComponent: {
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    borderRadius: 5,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    marginHorizontal: wp(2),
    marginVertical: hp(0.7),
  },
  hLine: {
    height: hp(0.3),
    backgroundColor: 'lightgrey',
  },
  cardMainTxt: {
    flex: 3,
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
    color: colors.BLACK,
  },
  cardChildTxt: {
    flex: 2,
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
    color: colors.BLACK,
  },
  cardChildBlackTxt: {
    flex: 2,
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
    color: colors.BLACK,
  },
  cardChildRedTxt: {
    flex: 2,
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
    color: colors.RED,
  },
  cardChildGreenTxt: {
    flex: 2,
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
    color: 'green',
  },
  greenLine: {
    height: hp(1.2),
    width: '100%',
    backgroundColor: '#0D9F21',
    borderRadius: 10,
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  redLine: {
    height: '100%',
    backgroundColor: '#D40101',
    borderRadius: 10,
  },
});
