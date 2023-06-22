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
  headerView: {
    flexDirection: 'row',
    borderBottomColor: colors.LIGHT_GREY,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    paddingBottom: hp(1.5),
    alignItems: 'center',
  },
  headreMainTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
  },
  headerCompanyTxt: {
    fontSize: SetFontSize.setDimension.textSize10,
    color: colors.WHITE,
    fontWeight: '500',
    fontFamily: ConstantKeys.INTER,
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCompanyView: {
    height: hp(3.2),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A7CC8',
    borderRadius: 20,
    marginRight: wp(1),
    paddingRight: wp(2),
  },
  companyIMG: {height: hp(8), width: wp(8), marginBottom: hp(0.2)},
  bodyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyChildView: {
    height: hp(32),
    width: wp(75),
    backgroundColor: '#F0FDF6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#95DCCB',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: hp(3),
  },
  bankReceiptImg: {
    height: '80%',
    width: '45%',
  },
  scanTxt: {
    fontSize: SetFontSize.setDimension.textSizeLarge,
    color: colors.BLACK,
    fontWeight: '700',
    fontFamily: ConstantKeys.MUKTA,
    marginTop: hp(1),
  },
  modalmainView: {
    height: hp(100),
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  modalView: {
    marginTop: hp(7),
    backgroundColor: 'white',
    paddingRight: wp(6),
  },
  modalList: {
    flexDirection: 'row',
    marginVertical: hp(0.5),
    alignItems: 'center',
  },
  modalTxt: {
    fontSize: SetFontSize.setDimension.textSizeRegular,
    color: colors.BLACK,
    fontWeight: '500',
    fontFamily: ConstantKeys.MUKTA,
    paddingLeft: wp(1),
  },
});
