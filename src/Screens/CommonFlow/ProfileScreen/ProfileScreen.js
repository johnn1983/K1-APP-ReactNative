/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import styles from './ProfileScreenStyle';
import ProfileView from '../../../Components/ProfileView';
import TextField from '../../../Components/TextField';
import Statistics from '../Statistics/Statistics';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProfileView onPress={() => navigation.navigate(Statistics)} />
      </View>

      <View style={styles.bodyView}>
        <Text style={styles.headerTxt}>Your Info</Text>
        <View style={styles.line} />

        <ScrollView
          style={styles.bodyChildView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.detailView}>
            <Text style={styles.detailText}>Business Name</Text>
            <TextField placeholder={'10 Minute School'} />
          </View>

          <View style={styles.detailView}>
            <Text style={styles.detailText}>Products & Services</Text>
            <TextField placeholder={'Services'} />
          </View>

          <View style={styles.detailView}>
            <Text style={styles.detailText}>Line of Business / Industry</Text>
            <TextField placeholder={'XXXXXX'} />
          </View>

          <View style={styles.detailView}>
            <Text style={styles.detailText}>Corporate Type</Text>
            <TextField placeholder={'LLC'} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
