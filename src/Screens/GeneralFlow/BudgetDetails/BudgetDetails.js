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

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './BudgetDetailsStyle';
import {IMG} from '../../../Constants/ImageConstant';
import PrimaryButton from '../../../Components/PrimaryButton';
import SubCategoryView from '../../CommonFlow/SubCategoryView/SubCategoryView';

const BudgetDetails = ({navigation}) => {
  const [addCategory, setAddCategory] = useState(false);
  const [upCategory, setUpCategory] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const budgetDetails = [
    {
      id: '1',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Nabila Akter Nabila',
    },
    {
      id: '2',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Nabila Akter Nabila',
    },
    {
      id: '3',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Nabila Akter Nabila',
    },
    {
      id: '4',
      categoryName: 'Business Insurance',
      amount: '$ 450.00',
      createdBy: 'Nabila Akter Nabila',
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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

  const AddCategory = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={addCategory}
        onRequestClose={() => {
          setAddCategory(!addCategory);
        }}>
        <View style={styles.modalmainView}>
          <View style={styles.modalView}>
            <View style={styles.closeView}>
              <TouchableOpacity onPress={() => setAddCategory(false)}>
                <Image
                  style={styles.closeImg}
                  source={IMG.ExtraLogo.CloseCategory}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalChildView}>
              <Text style={styles.modalTxt}>Add Category</Text>
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
          <Text style={styles.headerTxt}>Budget Details</Text>
        </View>

        <View style={styles.mainView}>
          <View style={styles.topButtonView}>
            <TouchableOpacity
              style={styles.budgetButtonView}
              onPress={() => setIsOpen(!isOpen)}>
              <Text style={styles.upperButtonTxt}>Budget</Text>
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

          <View style={styles.addButtonView}>
            <PrimaryButton
              text={'Add Category'}
              style={styles.addButtonStyle}
              textstyle={styles.addButtonTxt}
              onPress={() => setAddCategory(!addCategory)}
            />
          </View>

          {isOpen && (
            <View style={styles.flatlistView}>
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
          )}
        </View>
      </View>
      <AddCategory />
      <UpdateCategory />
    </SafeAreaView>
  );
};

export default BudgetDetails;
