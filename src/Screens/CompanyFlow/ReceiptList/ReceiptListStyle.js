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
    marginTop: hp(4),
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.WHITE,
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
  },
  mainView: {
    // height: hp(50),
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderColor: '#E8E5E5',
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginVertical: hp(2.5),
    paddingHorizontal: wp(2),
    marginBottom: hp(18),
    paddingBottom: hp(2),
  },
  topButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2.5),
    marginHorizontal: wp(4),
  },
  topBTleftView: {
    flex: 6,
  },
  topBTrightView: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  buttonImg: {
    marginLeft: wp(1),
  },
  upperButtonTxt: {
    fontSize: SetFontSize.setDimension.textSize13,
    color: colors.BLACK,
    fontWeight: '400',
    fontFamily: ConstantKeys.POPPINS,
  },
  listHeaderTxt: {
    fontSize: SetFontSize.setDimension.textSize15,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  bodyView: {
    flexDirection: 'row',
    marginTop: hp(5),
    backgroundColor: '#F4F4F4',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: hp(2),
    marginRight: wp(10),
    paddingVertical: hp(0.5),
  },
  flatlistView: {
    // marginVertical: hp(2),
    width: wp(150),
  },
  listView: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 1,
    marginBottom: hp(1.8),
    borderRadius: 10,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderWidth: 1,
    borderColor: '#EDEDED',
    marginHorizontal: wp(1),
  },
  listCategory: {flex: 1, alignItems: 'center'},
  listExpense: {flex: 1, alignItems: 'center'},
  listReason: {flex: 1, alignItems: 'center'},
  listDate: {flex: 1, alignItems: 'center'},
  listTxt: {
    fontSize: SetFontSize.setDimension.textSize15,
    color: '#4D4B4B',
    fontWeight: '400',
    fontFamily: ConstantKeys.MUKTA,
  },
  buttonView: {
    marginTop: hp(0.2),
    height: hp(3),
    backgroundColor: '#3461A6',
    width: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.WHITE,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  scrollBar: {
    width: hp(1.3),
    backgroundColor: '#D9D8D8',
    borderRadius: 10,
  },
});
