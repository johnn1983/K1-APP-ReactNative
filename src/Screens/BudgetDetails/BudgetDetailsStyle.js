import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../Utils/FontSize';
import {colors} from '../../Utils/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ConstantKeys} from '../../Utils/ConstantKey';

export default StyleSheet.create({
  mainContainer: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  cardComponent: {
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    borderRadius: 10,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    marginTop: hp(0.5),
    marginHorizontal: wp(3),
    marginBottom: hp(2),
  },
  headerView: {
    height: hp(4),
    width: wp(100),
    backgroundColor: '#3461A6',
    justifyContent: 'center',
    paddingLeft: wp(7),
    marginTop: hp(4),
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.WHITE,
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
  },
  mainView: {
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderColor: '#E8E5E5',
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginVertical: hp(2.5),
    marginBottom: hp(22),
  },
  topButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2.5),
    marginHorizontal: wp(4),
  },
  budgetButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(3.5),
    width: wp(21),
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 5,
  },
  exportButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(3.5),
    width: wp(21),
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 5,
    marginLeft: wp(15),
  },
  searchButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 5,
    height: hp(3.5),
    width: wp(21),
  },
  buttonImg: {marginTop: hp(0.1)},
  upperButtonTxt: {
    fontSize: SetFontSize.setDimension.textSize13,
    color: colors.BLACK,
    fontWeight: '400',
    fontFamily: ConstantKeys.POPPINS,
  },
  addButtonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: hp(3),
    marginHorizontal: wp(5),
    height: hp(5),
    marginBottom: hp(1),
  },
  addButtonStyle: {
    height: hp(4.5),
    width: wp(25),
    backgroundColor: '#0D8F29',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(0.2),
  },
  addButtonTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.WHITE,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
  },
  editDeleteImg: {
    height: hp(3),
    width: wp(8),
  },
  detailsTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1.8),
  },
  detailsHeaderTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  detailsTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: '#514F4F',
    fontWeight: '600',
    fontFamily: ConstantKeys.INTER,
  },
  detailsAnstxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: '#282828',
    fontWeight: '600',
    fontFamily: ConstantKeys.INTER,
  },
  deatilByTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: '#ACA500',
    fontWeight: '600',
    fontFamily: ConstantKeys.INTER,
  },
  detailsButton: {
    height: hp(2),
    width: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3461A6',
    borderRadius: 10,
  },
  detailsButtonTxt: {
    fontSize: SetFontSize.setDimension.textSizeTooSmall,
    color: colors.WHITE,
    fontWeight: '600',
    fontFamily: ConstantKeys.INTER,
  },
  flatlistView: {marginBottom: hp(15)},
  modalmainView: {
    flex: 1,
    backgroundColor: 'rgba(250,255,252,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: hp(40),
    width: wp(80),
    borderRadius: 25,
    backgroundColor: colors.WHITE,
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  modalTxt: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: '#608FD7',
    fontWeight: '500',
    marginBottom: hp(2),
    fontFamily: ConstantKeys.POPPINS,
  },
  closeView: {height: hp(6), alignItems: 'flex-end'},
  closeImg: {height: hp(6), width: wp(12)},
  modalChildView: {justifyContent: 'center', alignItems: 'center'},
  modalTxtInput: {
    height: hp(5),
    width: wp(60),
    borderWidth: 2,
    borderColor: '#A39E9E',
    borderRadius: 10,
    marginTop: hp(3),
    color: colors.BLACK,
    fontSize: SetFontSize.setDimension.textSizeMedium,
    fontWeight: '500',
    paddingVertical: hp(0.4),
    textAlign: 'center',
    fontFamily: ConstantKeys.POPPINS,
  },
  saveButton: {
    height: hp(5.5),
    width: wp(35),
    backgroundColor: '#4A7CC8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingBottom: 3,
    marginTop: hp(4),
  },
  saveTxt: {
    color: '#EDEDED',
    fontWeight: '700',
    fontSize: SetFontSize.setDimension.testSizeHed,
    fontFamily: ConstantKeys.MUKTA,
  },
});
