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
  },
  headerTxt: {
    alignSelf: 'center',
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.BLACK,
    fontWeight: '500',
    marginTop: hp(2),
    fontFamily: ConstantKeys.MUKTA,
  },
  line: {
    alignSelf: 'center',
    marginTop: hp(0.3),
    height: hp(0.5),
    width: wp(25),
    backgroundColor: '#645F5F',
  },
  bodyView: {
    flex: 0.7,
    backgroundColor: '#E5EDEC',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: hp(3),
    zindex: -99,
  },
  bodyChildView: {
    marginHorizontal: wp(10),
    marginBottom: hp(5),
  },
  detailView: {
    marginTop: hp(3),
  },
  detailText: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontWeight: '500',
    marginBottom: hp(0.5),
    fontFamily: ConstantKeys.MUKTA,
  },
});
