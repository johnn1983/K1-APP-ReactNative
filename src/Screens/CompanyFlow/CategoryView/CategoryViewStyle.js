import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../../Utils/FontSize';
import {colors} from '../../../Utils/colors';
import {ConstantKeys} from '../../../Utils/ConstantKey';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1},
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
    paddingHorizontal: wp(5),
    height: hp(7),
  },
  headerChildView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  headerMainTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
  },
  headerChildTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: '#6D27C6',
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
    marginLeft: wp(1),
  },
  headingView: {
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  headingTxt: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.BLACK,
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
  },
  noRecordTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: ConstantKeys.INTER,
  },
  modalmainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: hp(40),
    width: wp(90),
    borderRadius: 10,
    backgroundColor: colors.WHITE,
  },
  modalTxt: {
    fontSize: SetFontSize.setDimension.testSize22,
    color: '#608FD7',
    fontWeight: '600',
    marginBottom: hp(4),
    fontFamily: ConstantKeys.MUKTA,
  },
  closeView: {height: hp(4), alignItems: 'flex-end'},
  closeImg: {top: -6, left: 5, height: hp(4), width: wp(8)},
  modalChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  modalTxtInput: {
    height: hp(5),
    width: wp(60),
    borderWidth: 1,
    borderColor: '#A39E9E',
    borderRadius: 20,
    marginTop: hp(1),
    color: colors.BLACK,
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontWeight: '500',
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    fontFamily: ConstantKeys.MUKTA,
    textAlign: 'center',
  },
  saveButton: {
    height: hp(4),
    width: wp(60),
    backgroundColor: '#4A7CC8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingBottom: 3,
    marginTop: hp(4),
  },
  saveTxt: {
    color: '#EDEDED',
    fontWeight: '600',
    fontSize: SetFontSize.setDimension.textSizeLarge,
    fontFamily: ConstantKeys.MUKTA,
  },
  listView: {
    alignItems: 'center',
    flex: 1,
  },
  listTxtView: {
    height: hp(6),
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.WHITE,
    marginTop: hp(0.8),
    marginHorizontal: wp(2),
    paddingHorizontal: wp(4),
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    marginBottom: hp(0.8),
  },
  editlistTxtView: {
    height: hp(6),
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.WHITE,
    marginTop: hp(0.8),
    marginHorizontal: wp(2),
    paddingLeft: wp(4),
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    marginBottom: hp(0.8),
  },
  listTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: ConstantKeys.INTER,
  },
  listChildTxtView: {
    width: wp(74),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listEditIcon: {
    width: wp(7),
    marginLeft: wp(3),
  },
  categoryView: {
    width: wp(48),
    alignItems: 'flex-start',
  },
  amountView: {
    alignItems: 'flex-end',
    width: wp(25),
  },
  editCategoryView: {
    height: '100%',
    flexDirection: 'row',
    width: wp(41),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editAmountView: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(41),
  },
  deleteView: {
    height: '100%',
    width: ' 50%',
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  editView: {
    height: '100%',
    width: ' 50%',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  deleditTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.WHITE,
    fontWeight: '500',
    fontFamily: ConstantKeys.ACME,
  },
});
