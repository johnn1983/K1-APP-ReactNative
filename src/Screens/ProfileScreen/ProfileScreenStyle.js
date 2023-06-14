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
    paddingHorizontal: wp(8),
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(-7),
    marginBottom: hp(-7),
  },
  headerView: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.BLACK,
    fontWeight: '600',
  },
  orderView: {
    height: hp(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6D27C6',
    marginTop: hp(4),
    paddingHorizontal: wp(5),
    borderRadius: 20,
    alignItems: 'center',
  },
  orderTxt: {
    color: colors.WHITE,
    fontSize: SetFontSize.setDimension.testSizeHed,
    fontWeight: '500',
  },
  textView: {
    marginTop: hp(4),
  },
  text: {
    color: colors.BLACK,
    fontSize: SetFontSize.setDimension.textSizeLarge,
    fontWeight: '500',
  },
  bankView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    marginTop: hp(3),
    borderRadius: 20,
    paddingHorizontal: wp(3),
  },
  banklogoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  banklogo: {
    height: hp(7),
    width: wp(10),
  },
  bankTxt: {
    color: '#3C3838',
    fontSize: SetFontSize.setDimension.textSize13,
    fontWeight: '600',
    marginLeft: wp(3),
  },
  detailsView: {
    marginTop: hp(2),
  },
  detailchildView: {
    marginTop: hp(2),
  },
  detailsTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontWeight: '600',
    marginBottom: hp(1),
  },
  buttonContainer: {
    justifyContent: 'center',
    marginBottom: hp(2),
    marginTop: hp(3),
    marginHorizontal: wp(5),
  },
  primaryButton: {
    height: hp(6),
    backgroundColor: '#6D27C6',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: 20,
    borderColor: '#9FC0F1',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.WHITE,
    fontFamily: ConstantKeys.INTER_MEDIUM,
    textAlign: 'center',
  },
});
