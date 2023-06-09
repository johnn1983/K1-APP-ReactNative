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
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import styles from './ExpenseDetailsStyle';
import {IMG} from '../../../Constants/ImageConstant';
import PrimaryButton from '../../../Components/PrimaryButton';
import Icon from 'react-native-vector-icons/AntDesign';

const ExpenseDetails = ({navigation}) => {
  const [upCategory, setUpCategory] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const budgetDetails = [
    {
      id: '1',
      categoryName: 'Business Insurance',
      budget: '450.00',
      expense: '121.10',
    },
    {
      id: '2',
      categoryName: 'Business Insurance',
      budget: '450.00',
      expense: '161.10',
    },
    {
      id: '3',
      categoryName: 'Business Insurance',
      budget: '950.00',
      expense: '161',
    },
    {
      id: '4',
      categoryName: 'Business Insurance',
      budget: '210.50',
      expense: '131.10',
    },
    {
      id: '5',
      categoryName: 'Business Insurance',
      budget: '450.00',
      expense: '161.10',
    },
  ];

  const CardComponent = ({categoryName, budget, expense}) => {
    const expensePercentage = parseFloat(expense / budget) * 100;
    const width = expensePercentage + '%';
    return (
      <View style={styles.cardComponent}>
        <View style={styles.cardHeaderView}>
          <View>
            <Text style={styles.detailsHeaderTxt}>Budget Details</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setUpCategory(!upCategory)}>
              <Image
                source={IMG.ExtraLogo.EditRed}
                resizeMode="center"
                style={styles.editDeleteImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={IMG.ExtraLogo.DeleteRed}
                resizeMode="center"
                style={styles.editDeleteImg}
              />
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
          <Text style={styles.deatilByTxtRed}>- {expense}</Text>
        </View>
        <View style={styles.detailsTxtView}>
          <Text style={styles.detailsTxt}>Remaining Budget</Text>
          <Text style={styles.deatilByTxtGreen}>
            {(budget - expense).toFixed(2)}
          </Text>
        </View>
        <View style={styles.greenLine}>
          <View
            style={{
              ...styles.redLine,
              width: width,
            }}
          />
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
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>Expense Details</Text>
        </View>

        <View style={styles.mainView}>
          <View style={styles.topButtonView}>
            <TouchableOpacity
              style={styles.budgetButtonView}
              onPress={() => setIsOpen(!isOpen)}>
              <Text style={styles.upperButtonTxt}>Expense</Text>
              <Icon
                name={isOpen ? 'caretdown' : 'caretright'}
                size={8}
                color="#868686"
                style={styles.buttonImg}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportButtonView}>
              <Text style={styles.upperButtonTxt}>Export</Text>
              <Icon
                name="caretright"
                size={8}
                color="#868686"
                style={styles.buttonImg}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchButtonView}>
              <Text style={styles.upperButtonTxt}>Search</Text>
            </TouchableOpacity>
          </View>

          {isOpen && (
            <View style={styles.flatlistView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={budgetDetails}
                renderItem={({item}) => (
                  <CardComponent
                    categoryName={item.categoryName}
                    budget={item.budget}
                    expense={item.expense}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          )}
        </View>
      </View>
      <UpdateCategory />
    </SafeAreaView>
  );
};

export default ExpenseDetails;
