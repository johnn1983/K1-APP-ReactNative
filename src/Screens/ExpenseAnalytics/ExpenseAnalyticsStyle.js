import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../Utils/FontSize';
import {colors} from '../../Utils/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    marginTop: hp(4),
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.WHITE,
    fontWeight: '600',
  },
  mainView: {
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderColor: '#E8E5E5',
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginVertical: hp(2.5),
    marginBottom: hp(5),
    paddingHorizontal: wp(2),
    paddingTop: hp(1),
  },
  calender: {
    height: hp(5),
    width: wp(10),
    alignSelf: 'flex-end',
  },
  roundChart: {
    top: -40,
    height: hp(40),
    width: wp(80),
    alignSelf: 'center',
  },
  barView: {
    top: -15,
    flexDirection: 'row',
    marginLeft: wp(5),
    paddingVertical: hp(2),
    marginBottom: hp(-4),
  },
  barTxtView: {
    flexDirection: 'column',
    paddingHorizontal: wp(1),
  },
  barLinesView: {
    flexDirection: 'row',
  },
  barTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.BLACK,
    fontWeight: '600',
    marginTop: hp(1),
    alignSelf: 'flex-end',
  },
  hlines: {
    top: -50,
    left: -10,
    position: 'absolute',
    height: hp(30),
    width: wp(90),
  },
  vlines: {
    top: -35,
    height: hp(22),
    width: wp(25),
  },
  allTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  },
  txtView: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  txtStyle: {
    height: hp(4.5),
    width: wp(24),
    fontSize: SetFontSize.setDimension.textSize13,
    color: colors.BLACK,
    fontWeight: '500',
  },
  firstLine: {
    height: hp(1),
    width: wp(21),
    backgroundColor: '#D06426',
    borderRadius: 20,
  },
  secondLine: {
    height: hp(1),
    width: wp(21),
    backgroundColor: '#A93DE8',
    borderRadius: 20,
  },
  thirdLine: {
    height: hp(1),
    width: wp(21),
    backgroundColor: '#8DABE1',
    borderRadius: 20,
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
    fontSize: SetFontSize.setDimension.textSize10,
    color: colors.BLACK,
    fontWeight: '400',
    textAlign: 'center',
  },
  bodyHeaderTxt2: {
    fontSize: SetFontSize.setDimension.textSize11,
    color: '#0D8F29',
    fontWeight: '400',
    textAlign: 'center',
  },
  flatlistView: {marginBottom: hp(12)},
});
