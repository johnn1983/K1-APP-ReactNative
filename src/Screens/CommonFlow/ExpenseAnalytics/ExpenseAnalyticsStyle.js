import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../../Utils/FontSize';
import {colors} from '../../../Utils/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ConstantKeys} from '../../../Utils/ConstantKey';

export default StyleSheet.create({
  mainContainer: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.BG_WHITE,
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
    paddingHorizontal: wp(6),
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
    marginTop: hp(2),
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.WHITE,
    fontWeight: '600',
  },
  headerView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2.2),
    marginHorizontal: wp(5),
  },
  headerTxt2: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
    color: colors.BLACK,
  },
  mainView: {
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderColor: '#E8E5E5',
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginTop: hp(2.5),
    marginBottom: hp(-1),
    paddingHorizontal: wp(2),
    paddingTop: hp(1),
  },
  calender: {
    alignSelf: 'flex-end',
  },
  categoryTxtView: {
    backgroundColor: '#EEEEEE',
    marginTop: hp(2),
    paddingVertical: hp(3),
    paddingLeft: wp(3),
  },
  categoryView: {
    width: wp(22),
    marginRight: wp(5),
    justifyContent: 'center',
  },
  txtStyle: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.BLACK,
    fontWeight: '600',
    fontFamily: ConstantKeys.INTER,
  },
  thirdLine: {
    height: hp(1),
    width: '100%',
    borderRadius: 5,
    marginTop: hp(1),
  },
  tableHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(1),
    marginTop: hp(3),
  },
  tableHeaderTxtView: {
    height: hp(7),
    width: wp(17),
    backgroundColor: '#776ADE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(1),
  },
  tableHeadTxt: {
    fontSize: SetFontSize.setDimension.textSize11,
    color: colors.WHITE,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: ConstantKeys.MUKTA,
  },
  bodyHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(1),
    marginTop: hp(0.4),
  },
  bodyHeaderTxtView: {
    height: hp(7),
    width: wp(17),
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(0.5),
  },
  bodyHeaderTxt: {
    fontSize: SetFontSize.setDimension.textSize11,
    color: colors.BLACK,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: ConstantKeys.MUKTA,
  },
  bodyHeaderTxt2: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: '#0D8F29',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: ConstantKeys.MUKTA,
  },
  flatlistView: {marginBottom: hp(10)},
  hLinesView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hImageLines: {
    height: 3,
    width: wp(75),
    backgroundColor: 'lightgrey',
    marginLeft: wp(1),
    marginTop: hp(3),
  },
  chartImg: {alignItems: 'center'},
});
