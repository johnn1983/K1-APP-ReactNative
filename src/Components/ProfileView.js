/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMG} from '../Constants/ImageConstant';
import {colors} from '../Utils/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SetFontSize} from '../Utils/FontSize';
import PrimaryButton from './PrimaryButton';
import {ConstantKeys} from '../Utils/ConstantKey';
import Statistics from '../Screens/Statistics/Statistics';

const ProfileView = ({onPress}) => {
  return (
    // <View style={styles.container}>
    //   <TouchableOpacity>
    //     <Image
    //       style={styles.editImg}
    //       source={IMG.ExtraLogo.editButton}
    //       resizeMode="center"
    //     />
    //   </TouchableOpacity>

    //   <View style={styles.childContainer}>
    //     <View style={styles.imageContainer}>
    //       <Image
    //         style={styles.profileImg}
    //         source={IMG.ExtraLogo.profilePIc}
    //         resizeMode="center"
    //       />
    //     </View>

    //     <View style={styles.textContainer}>
    //       <View style={styles.profileTxtView}>
    //         <Text style={styles.nameTxt}>Sabariya Muzumder</Text>
    //         <Image source={IMG.ValueIcons.Basic} resizeMode="center" />
    //       </View>
    //       <View>
    //         <Text style={styles.userTxt}>sabariyamuzumder9921@gmail.com</Text>
    //         <Text style={styles.userTxt}>Cell: +1-9947792172</Text>
    //         <Text style={styles.userTxt}>United States</Text>
    //       </View>
    //     </View>
    //   </View>
    // </View>
    <View
      style={{
        flex: 1,
        // backgroundColor: '#FDFDFD',
        paddingLeft: 20,
        paddingRight: 10,
      }}>
      <TouchableOpacity>
        <Image
          style={styles.editImg}
          source={IMG.ExtraLogo.editButton}
          resizeMode="center"
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            style={{height: 100, width: 100}}
            // style={styles.profileImg}
            source={IMG.ExtraLogo.profilePIc}
            resizeMode="center"
          />
        </View>
        <View
          style={{
            marginLeft: wp(5),
            marginTop: hp(0.7),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: SetFontSize.setDimension.textSizeLarge,
                color: colors.BLACK,
                marginRight: 5,
                fontWeight: '500',
              }}>
              Sabariya Muzumder
            </Text>
            <Image
              style={{height: 25, width: 25}}
              source={IMG.ValueIcons.Basic}
              resizeMode="center"
            />
          </View>
          <View>
            <Text style={styles.userTxt}>sabariyamuzumder9921@gmail.com</Text>
            <Text style={styles.userTxt}>Cell: +1-9947792172</Text>
            <Text style={styles.userTxt}>United States</Text>
          </View>
          <View
            style={{
              height: hp(4.5),
              width: wp(58),
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: hp(1),
            }}>
            <PrimaryButton
              text={'Statistics'}
              style={styles.primaryButton}
              textstyle={styles.buttonText}
              onPress={onPress}
            />
            <PrimaryButton
              text={'Update Plan'}
              style={styles.primaryButton2}
              textstyle={styles.buttonText2}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: colors.WHITE,
  //     paddingHorizontal: 15,
  //   },
  //   imageContainer: {
  //     marginRight: 20,
  //   },
  editImg: {
    height: 50,
    width: 45,
    alignSelf: 'flex-end',
  },
  //   childContainer: {
  //     justifyContent: 'flex-start',
  //     flexDirection: 'row',
  //   },
  //   profileImg: {
  //     height: 100,
  //     width: 100,
  //   },
  //   profileTxtView: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },
  //   nameTxt: {
  //     fontSize: SetFontSize.setDimension.testSizeHed,
  //     color: colors.BLACK,
  //   },
  userTxt: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.BLACK,
    marginBottom: hp(0.5),
  },
  primaryButton: {
    height: hp(4),
    width: wp(25),
    backgroundColor: '#0D8F29',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.WHITE,
    fontWeight: '500',
    textAlign: 'center',
  },
  primaryButton2: {
    height: hp(4),
    width: wp(28),
    backgroundColor: '#081C3B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft: wp(5),
  },
  buttonText2: {
    fontSize: SetFontSize.setDimension.textSizeSmall,
    color: colors.WHITE,
    fontWeight: '500',
    textAlign: 'center',
  },
  //   textContainer: {},
});
export default ProfileView;
