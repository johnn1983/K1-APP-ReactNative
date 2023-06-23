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
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  bodyView: {
    alignContent: 'flex-start',
    marginTop: hp(5),
  },
  imgType: {
    height: hp(6),
    width: wp(7),
  },
  mainView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hp(-1),
    justifyContent: 'space-between',
    marginRight: wp(52),
  },
  mainchildView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontWeight: '700',
    marginLeft: wp(2),
    fontFamily: ConstantKeys.MUKTA,
  },
  arrowImg: {
    alignSelf: 'center',
    marginTop: 2,
  },
  openView: {
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 10,
    marginVertical: hp(1),
    marginHorizontal: wp(6),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
  },
  openViewTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: '#055913',
    fontWeight: '400',
    marginTop: 2,
    marginLeft: 2,
    fontFamily: ConstantKeys.MUKTA,
  },
  txtView: {
    flexDirection: 'row',
  },
  buttonView: {
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(0.5),
  },
  freeTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  purchaseButton: {
    marginTop: hp(1),
    height: hp(5),
    backgroundColor: '#4A0838',
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.8),
    borderRadius: 30,
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
  buttonTxt: {
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.WHITE,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
  },
  priceTxt: {
    color: '#0D8F29',
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
  },
});
