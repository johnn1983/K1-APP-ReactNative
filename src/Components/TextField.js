import React from 'react';
import {TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../Utils/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SetFontSize} from '../Utils/FontSize';
import {ConstantKeys} from '../Utils/ConstantKey';
import Icon from 'react-native-vector-icons/Ionicons';

const TextField = props => {
  const {placeholder, value, onChangeText, keyboardType, secureTextEntry} =
    props;
  return (
    <TextInput
      style={styles.container}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'#868686'}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp(4.5),
    width: wp(80),
    borderColor: '#77869D',
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.7),
    color: colors.BLACK,
    fontSize: SetFontSize.setDimension.textSizeRegular,
    fontFamily: ConstantKeys.MUKTA,
    fontWeight: '400',
  },
});

export default TextField;
