import {Platform} from 'react-native';

export const ConstantKeys = {
  //GOOGLE_KEY: '---------',
  GOOGLE_KEY: 'AIzaSyBSG0_zu5dGtJCF7XOjmNV7zcep5_MIpwo',
  isSkipped: 'isSkipped',
  ISLOGIN: 'ISLOGIN',
  ISLOCATION: 'ISLOCATION',
  LOGINTOKEN: 'LOGINTOKEN',
  USERDATA: 'USERDATA',
  FCM_TOKEN: 'FCM_TOKEN',
  PRICE_SYMBOL: '$',
  ...Platform.select({
    ios: {
      HEEBO_BLACK: 'Heebo-Black',
      HEEBO_BOLD: 'Heebo-Bold',
      HEEBO_EXTRABOLD: 'Heebo-ExtraBold',
      HEEBO_EXTRALIGHT: 'Heebo-ExtraLight',
      HEEBO_LIGHT: 'Heebo-Light',
      HEEBO_MEDIUM: 'Heebo-Medium',
      HEEBO_REGULAR: 'Heebo-Regular',
      HEEBO_SEMIBOLD: 'Heebo-SemiBold',
      HEEBO_THIN: 'Heebo-Thin',
      COCO_GOTHIC_REGULAR: 'Coco-Gothic-Regular',
      COCO_ULTRALIGHT: 'Coco-Gothic-Ultralight',
      COCO_GOTHIC_REGULAR_ITALIC: 'Coco-Gothic-Italic-trial_0',
    },
    android: {
      HEEBO_BLACK: 'Heebo-Black',
      HEEBO_BOLD: 'Heebo-Bold',
      HEEBO_EXTRABOLD: 'Heebo-ExtraBold',
      HEEBO_EXTRALIGHT: 'Heebo-ExtraLight',
      HEEBO_LIGHT: 'Heebo-Light',
      HEEBO_MEDIUM: 'Heebo-Medium',
      HEEBO_REGULAR: 'Heebo-Regular',
      HEEBO_SEMIBOLD: 'Heebo-SemiBold',
      HEEBO_THIN: 'Heebo-Thin',
      COCO_GOTHIC_REGULAR: 'Coco-Gothic-Regular',
      COCO_ULTRALIGHT: 'Coco-Gothic-Ultralight',
      COCO_GOTHIC_REGULAR_ITALIC: 'Coco-Gothic-Italic-trial_0',
      INTER_Black: 'Inter-Black',
      INTER_BOLD: 'Inter-Bold',
      INTER_EXTRABOLD: 'Inter-ExtraBold',
      INTER_EXTRALIGHT: 'Inter-ExtraLight',
      INTER_LIGHT: 'Inter-Light',
      INTER_MEDIUM: 'Inter-Medium',
      INTER_REGULAR: 'Inter-Regular',
      INTER_SEMIBOLD: 'Inter-SemiBold',
      INTER_THIN: 'Inter-Thin',
      INTER_VARIABLE: 'Inter-VariableFont_slnt',
    },
  }),
};
