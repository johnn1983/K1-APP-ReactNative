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
    backgroundColor: '#FDFDFD',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2.2),
    marginHorizontal: wp(5),
  },
  headerChildView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
    color: colors.BLACK,
  },
  headerChildTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
    color: '#6D27C6',
    paddingLeft: wp(1),
  },
  budgetflatList: {flex: 1},
  cardComponent: {
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 1,
    borderRadius: 8,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    marginTop: hp(1),
    marginHorizontal: wp(3),
    marginBottom: hp(2),
  },
  cardHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  detailsTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1.8),
  },
  editDeleteImg: {
    height: hp(3),
    width: wp(8),
  },
});
