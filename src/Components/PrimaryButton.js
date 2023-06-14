import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const PrimaryButton = props => {
  const {style, onPress, textstyle, text} = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textstyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
