import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMG} from '../Constants/ImageConstant';
import {colors} from '../Utils/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SetFontSize} from '../Utils/FontSize';

const ProfileView = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.editImg}
          source={IMG.ExtraLogo.editButton}
          resizeMode="center"
        />
      </TouchableOpacity>

      <View style={styles.childContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImg}
            source={IMG.ExtraLogo.profilePIc}
            resizeMode="center"
          />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.profileTxtView}>
            <Text style={styles.nameTxt}>Sabariya Muzumder</Text>
            <Image
              styles={styles.valueIcon}
              source={IMG.ValueIcons.Basic}
              resizeMode="center"
            />
          </View>

          <Text>sabariyamuzumder9921@gmail.com</Text>
          <Text>Cell: +1-9947792172</Text>
          <Text>United States</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 15,
  },
  imageContainer: {
    marginRight: 20,
  },
  editImg: {
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
  },
  childContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  profileImg: {
    height: 100,
    width: 100,
  },
  profileTxtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTxt: {
    fontSize: SetFontSize.setDimension.testSizeHed,
    color: colors.BLACK,
  },
  valueIcon: {
    marginLeft: wp(-1),
    height: 10,
    width: 10,
  },
  textContainer: {},
});
export default ProfileView;
