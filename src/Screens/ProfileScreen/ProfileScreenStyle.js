import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../Utils/FontSize';
import {colors} from '../../Utils/colors';
import {ConstantKeys} from '../../Utils/ConstantKey';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerTxt: {
    alignSelf: 'center',
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontWeight: '500',
    marginTop: hp(2),
  },
  line: {
    alignSelf: 'center',
    marginTop: hp(0.3),
    height: hp(0.5),
    width: wp(25),
    backgroundColor: '#645F5F',
  },
  bodyView: {
    zindex: -1,
    flex: 2.6,
    backgroundColor: '#E5EDEC',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: hp(4),
  },
  bodyChildView: {
    marginHorizontal: wp(10),
  },
  detailView: {
    marginTop: hp(3),
  },
  detailText: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '500',
    marginBottom: hp(1),
  },
});
