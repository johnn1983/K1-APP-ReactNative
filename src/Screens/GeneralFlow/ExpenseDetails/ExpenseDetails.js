/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import styles from './ExpenseDetailsStyle';

import {IMG} from '../../../Constants/ImageConstant';
import PrimaryButton from '../../../Components/PrimaryButton';
import BottomNavigation from '../../../Components/BottomNavigation';
import Scanner from '../Scanner/Scanner';
import BudgetDetails from '../BudgetDetails/BudgetDetails';
import ExpenseAnalytics from '../ExpenseAnalytics/ExpenseAnalytics';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExpenseDetails = ({navigation}) => {
  const [upCategory, setUpCategory] = useState(false);

  const budgetDetails = [
    {
      id: '1',
      categoryName: 'Business Insurance',
      budget: '$ 450.00',
      expense: '-161.10',
      remainingbudget: '238.90',
    },
    {
      id: '2',
      categoryName: 'Business Insurance',
      budget: '$ 450.00',
      expense: '-161.10',
      remainingbudget: '238.90',
    },
    {
      id: '3',
      categoryName: 'Business Insurance',
      budget: '$ 450.00',
      expense: '-161.10',
      remainingbudget: '238.90',
    },
    {
      id: '4',
      categoryName: 'Business Insurance',
      budget: '$ 450.00',
      expense: '-161.10',
      remainingbudget: '238.90',
    },
    {
      id: '5',
      categoryName: 'Business Insurance',
      budget: '$ 450.00',
      expense: '-161.10',
      remainingbudget: '238.90',
    },
  ];

  const CardComponent = ({categoryName, budget, expense, remainingbudget}) => {
    return (
      <View style={styles.cardComponent}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.detailsHeaderTxt}>Budget Details</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setUpCategory(!upCategory)}>
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
          <Text style={styles.detailsTxt}>Budget</Text>
          <Text style={styles.detailsAnstxt}>{budget}</Text>
        </View>
        <View style={styles.detailsTxtView}>
          <Text style={styles.detailsTxt}>Expense</Text>
          <Text style={styles.deatilByTxtRed}>{expense}</Text>
        </View>
        <View style={styles.detailsTxtView}>
          <Text style={styles.detailsTxt}>Remaining Budget</Text>
          <Text style={styles.deatilByTxtGreen}>{remainingbudget}</Text>
        </View>
        <View style={styles.greenLine}>
          <View style={styles.redLine} />
        </View>
      </View>
    );
  };

  const UpdateCategory = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={upCategory}
        onRequestClose={() => {
          setUpCategory(!upCategory);
        }}>
        <View style={styles.modalmainView}>
          <View style={styles.modalView}>
            <View style={styles.closeView}>
              <TouchableOpacity onPress={() => setUpCategory(false)}>
                <Image
                  style={styles.closeImg}
                  source={IMG.ExtraLogo.CloseCategory}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalChildView}>
              <Text style={styles.modalTxt}>Update Category</Text>
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Category Name"
                placeholderTextColor={'#A39E9E'}
              />
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Category Budget Amount"
                placeholderTextColor={'#A39E9E'}
              />
              <PrimaryButton
                style={styles.saveButton}
                text={'Save'}
                textstyle={styles.saveTxt}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>Expense Details</Text>
        </View>

        <View style={styles.mainView}>
          <View style={styles.topButtonView}>
            <TouchableOpacity style={styles.budgetButtonView}>
              <Text style={styles.upperButtonTxt}>Expense</Text>
              <Image
                style={styles.buttonImg}
                source={IMG.ExtraLogo.DownArrow3}
                resizeMode="center"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportButtonView}>
              <Text style={styles.upperButtonTxt}>Export</Text>
              <Image
                style={styles.buttonImg}
                source={IMG.ExtraLogo.RightArrow}
                resizeMode="center"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchButtonView}>
              <Text style={styles.upperButtonTxt}>Search</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.flatlistView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={budgetDetails}
              renderItem={({item}) => (
                <CardComponent
                  categoryName={item.categoryName}
                  budget={item.budget}
                  expense={item.expense}
                  remainingbudget={item.remainingbudget}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
      <UpdateCategory />
      {/* <View>
        <BottomNavigation
          onPress={() => navigation.navigate(Scanner)}
          onPressBudget={() => navigation.navigate(BudgetDetails)}
          onPressAnalytics={() => navigation.navigate(ExpenseAnalytics)}
        />
      </View> */}
    </View>
  );
};

export default ExpenseDetails;