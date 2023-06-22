/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';

import styles from './StatisticsStyle';
import {IMG} from '../../../Constants/ImageConstant';
import PrimaryButton from '../../../Components/PrimaryButton';
import Icon from 'react-native-vector-icons/Ionicons';

const Statistics = ({navigation}) => {
  const StatisticsArr = [
    {id: '1', Used: '05', Service: 'Category Itemization', Remaining: '05'},
    {id: '2', Used: '05', Service: 'Sub Category', Remaining: '05'},
    {
      id: '3',
      Used: '$20,000',
      Service: 'Budget',
      Remaining: '$20,000',
    },
    {id: '4', Used: '01', Service: 'Number of User', Remaining: '00'},
    {id: '5', Used: '01', Service: 'Number of Receipt/month', Remaining: '00'},
    {id: '6', Used: '01', Service: 'Role', Remaining: '00'},
    {id: '7', Used: '01', Service: 'Reports/month', Remaining: '00'},
    {id: '8', Used: '01', Service: 'Customize Reports', Remaining: '00'},
    {id: '9', Used: '01', Service: 'Exporting Format', Remaining: '00'},
    {id: '10', Used: '01', Service: 'CPA Sharing', Remaining: '00'},
    {id: '11', Used: '01', Service: 'Alerts', Remaining: '00'},
    {id: '12', Used: '01', Service: 'Responsibilty', Remaining: '00'},
  ];

  const ListStatistics = ({used, service, remaining}) => {
    return (
      <View style={styles.listView}>
        <View style={styles.serviceTxt}>
          <Text style={styles.listTxt}>{service}</Text>
        </View>
        <View style={styles.usedTxt}>
          <Text style={styles.listTxt}>{used}</Text>
        </View>
        <View style={styles.remainingTxt}>
          <Text style={styles.listTxt}>{remaining}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Icon
          style={styles.settingsImg}
          name="settings-outline"
          size={25}
          color="black"
        />
      </TouchableOpacity>

      <View style={styles.profileView}>
        <Image
          style={styles.profileImg}
          source={IMG.ExtraLogo.SmallProfilePic}
          resizeMode="center"
        />
        <Text style={styles.profileTxt}>Sabariya Muzumeder</Text>
        <Image source={IMG.ValueIcons.Basic} resizeMode="center" />
      </View>

      <View style={styles.buttonView}>
        <PrimaryButton
          text={'Basic Plan Statistics'}
          style={styles.buttonStyle}
          textstyle={styles.buttonTxt}
        />
      </View>

      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Services</Text>
        <Text style={styles.headerTxt}>{'                   '}Used</Text>
        <Text style={styles.headerTxt}>Remaining</Text>
      </View>
      <View style={styles.line} />

      <FlatList
        data={StatisticsArr}
        renderItem={({item}) => (
          <ListStatistics
            used={item.Used}
            service={item.Service}
            remaining={item.Remaining}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Statistics;
