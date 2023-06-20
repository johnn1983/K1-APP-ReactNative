import {StyleSheet} from 'react-native';
import {SetFontSize} from '../../Utils/FontSize';
import {colors} from '../../Utils/colors';
import {ConstantKeys} from '../../Utils/ConstantKey';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  bodyView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(5),
  },
  scanView: {
    height: hp(32),
    width: wp(68),
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F0FDF6',
    borderColor: '#95DCCB',
    borderWidth: 1,
    borderRadius: 15,
  },
  scanView2: {
    height: hp(30),
    width: wp(68),
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F0FDF6',
    borderColor: '#95DCCB',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: hp(5),
  },
  bankReceiptImg: {
    height: hp(25),
    width: wp(35),
    marginTop: hp(40),
  },
  scanTxt: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.BLACK,
    fontWeight: '600',
    marginBottom: hp(1),
    fontFamily: ConstantKeys.MUKTA,
  },
  scanTxt2: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontWeight: '600',
    marginBottom: hp(1),
  },
  modalView: {
    flex: 13,
    backgroundColor: 'rgba(255,255,250,0.5)',
  },
  modalButtonView: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.WHITE,
    borderWidth: 2,
    borderColor: colors.LIGHT_GREY,
  },
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImg: {
    height: 30,
    width: 30,
  },
  modalTxt: {
    marginTop: hp(1),
    fontSize: SetFontSize.setDimension.textSizeMedium,
    color: colors.BLACK,
    fontWeight: '400',
    fontFamily: ConstantKeys.INTER,
  },
  selectCategoryView: {
    height: hp(6),
    width: wp(85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BLACK,
    paddingHorizontal: wp(3),
    marginTop: hp(6),
  },
  selectCategoryTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: '#857E7E',
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
  },
  buttonView: {
    height: hp(5),
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: hp(4),
    paddingBottom: hp(1),
  },
  buttonView2: {
    height: hp(5),
    width: wp(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: hp(4),
    paddingBottom: hp(1),
  },
  primaryButton: {
    height: hp(4),
    width: wp(18),
    backgroundColor: '#EE5A5A',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(0.4),
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  categoryModal: {
    height: hp(55),
    width: wp(100),
    backgroundColor: '#A7D6FB',
    paddingHorizontal: wp(8),
    paddingTop: hp(3),
    marginTop: hp(35),
    marginBottom: hp(10),
  },
  categoryTxtView: {
    marginBottom: hp(5),
  },
  categoryTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
  },
  showDetailsView: {
    height: hp(7),
    width: wp(88),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp(2),
    marginTop: hp(5),
  },
  showDetailsTxt: {
    height: hp(6.5),
    width: wp(48),
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: 15,
  },
  detailsTxt: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: '#454141',
    fontWeight: '600',
    fontFamily: ConstantKeys.MUKTA,
  },
  input: {
    height: hp(6),
    width: wp(50),
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
  },
});
