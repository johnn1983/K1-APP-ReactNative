/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './UpdateBudgetStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryView from '../CategoryView/CategoryView';
import SubCategoryView from '../../CommonFlow/SubCategoryView/SubCategoryView';

const UpdateBudget = ({navigation, route}) => {
  const budgetDetails = [
    {
      id: '1',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Dr. Alamin Hossain',
    },
    {
      id: '2',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Kambaii.com',
    },
    {
      id: '3',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Dr. Alamin Hossain',
    },
    {
      id: '4',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Kambaii.com',
    },
    {
      id: '5',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Nabila Akter Nabila',
    },
  ];

  const CardComponent = ({categoryName, amount, createdBy}) => {
    return (
      <View style={styles.cardComponent}>
        <View style={styles.cardHeaderView}>
          <View>
            <Text style={styles.detailsHeaderTxt}>Budget Details</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Icon
                style={styles.editDeleteImg}
                name="edit"
                size={20}
                color="red"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="delete" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailsTxtView}>
          <Text style={styles.detailsTxt}>Category Name</Text>
          <Text style={styles.detailsAnstxt}>{categoryName}</Text>
        </View>
        <View style={styles.detailsTxtView}>
          <Text style={styles.detailsTxt}>Amount</Text>
          <Text style={styles.detailsAnstxt}>{amount}</Text>
        </View>
        <View style={styles.detailsTxtView}>
          <Text style={styles.detailsTxt}>Created By</Text>
          <Text style={styles.deatilByTxt}>{createdBy}</Text>
        </View>
        <View style={styles.detailsTxtView}>
          <Text style={styles.detailsTxt}>Sub Category</Text>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigation.navigate(SubCategoryView)}>
            <Text style={styles.detailsButtonTxt}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Update Budget</Text>
        <TouchableOpacity
          style={styles.headerChildView}
          onPress={() => navigation.navigate(CategoryView)}>
          <Icon name="control-point" size={22} color="#6D27C6" />
          <Text style={styles.headerChildTxt}>New Category</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.budgetflatList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={budgetDetails}
          renderItem={({item}) => (
            <CardComponent
              categoryName={item.categoryName}
              amount={item.amount}
              createdBy={item.createdBy}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default UpdateBudget;