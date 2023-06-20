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
    backgroundColor: colors.WHITE,
    paddingHorizontal: wp(2),
  },
  settingsImg: {
    marginTop: hp(1),
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    marginBottom: hp(-1),
  },
  profileView: {
    paddingHorizontal: wp(1),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileImg: {
    height: 50,
    width: 50,
  },
  profileTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '500',
    paddingLeft: wp(1),
    fontFamily: ConstantKeys.MUKTA,
  },
  buttonView: {
    marginTop: hp(2),
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 50,
    height: hp(4),
    width: wp(35),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D8F29',
  },
  buttonTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.WHITE,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
  },
  headerView: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  headerTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  line: {
    marginVertical: hp(0.5),
    height: hp(0.2),
    width: wp(100),
    backgroundColor: '#828282',
  },
  listView: {
    flex: 1,
    backgroundColor: 'rgba(208, 204, 204, 0.15)',
    flexDirection: 'row',
    marginTop: hp(1.5),
    justifyContent: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    borderRadius: 25,
  },
  serviceTxt: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 2,
  },
  usedTxt: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  remainingTxt: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1.4,
  },
  listTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.BLACK,
    fontWeight: '400',
    fontFamily: ConstantKeys.MUKTA,
  },
  flatlist: {},
});
