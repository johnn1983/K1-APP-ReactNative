/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import styles from './CategoryViewStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../../Components/PrimaryButton';
import {IMG} from '../../../Constants/ImageConstant';
import Icons from 'react-native-vector-icons/AntDesign';

const CategoryView = ({navigation}) => {
  const [addSubCat, setAddSubCate] = useState(false);
  const [upSubCat, setUpSubCate] = useState(false);
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [subCategoryArr, setsubCategoryArr] = useState('');
  const [selCatIndex, setSelCatIndex] = useState(null);
  const [selCat, setSelCat] = useState(null);

  const AddCategory = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={addSubCat}
        onRequestClose={() => {
          setAddSubCate(!addSubCat);
        }}>
        <View style={styles.modalmainView}>
          <View style={styles.modalView}>
            <View style={styles.closeView}>
              <TouchableOpacity onPress={() => setAddSubCate(false)}>
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
                value={name}
                onChangeText={text => setName(text)}
                keyboardType="default"
              />
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Yearly Budget Amount"
                placeholderTextColor={'#A39E9E'}
                value={amount}
                onChangeText={text => setAmount(text)}
                keyboardType="numeric"
              />
              <PrimaryButton
                style={styles.saveButton}
                text={'Save'}
                textstyle={styles.saveTxt}
                onPress={() => {
                  const newSubCategory = {
                    id: subCategoryArr.length + 1,
                    name: name,
                    amount: amount,
                  };
                  setsubCategoryArr([...subCategoryArr, newSubCategory]);
                  setName('');
                  setAmount('');
                  setAddSubCate(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const ShowCategory = ({Name, Amount, index}) => {
    const isCategorySelected = index === selCatIndex;
    const handleCategoryPress = () => {
      setSelCatIndex(isCategorySelected ? null : index);
    };
    const handleEditPress = () => {
      setSelCat(index);
      setUpSubCate(true);
    };

    return isCategorySelected ? (
      <View style={styles.editlistTxtView}>
        <TouchableOpacity
          style={styles.editCategoryView}
          onPress={handleCategoryPress}>
          <Text numberOfLines={1} style={styles.listTxt}>
            {Name}
          </Text>
          <Text numberOfLines={1} style={styles.listTxt}>
            {Amount}$
          </Text>
        </TouchableOpacity>
        <View style={styles.editAmountView}>
          <TouchableOpacity
            style={styles.deleteView}
            onPress={() => deleteCategory(index)}>
            <Icon name="delete" size={20} color="white" />
            <Text style={styles.deleditTxt}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editView} onPress={handleEditPress}>
            <Icon name="edit" size={20} color="white" />
            <Text style={styles.deleditTxt}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={styles.listTxtView}>
        <View style={styles.listChildTxtView}>
          <View style={styles.categoryView}>
            <Text numberOfLines={2} style={styles.listTxt}>
              {Name}
            </Text>
          </View>
          <View style={styles.amountView}>
            <Text numberOfLines={1} style={styles.listTxt}>
              {Amount}$
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.listEditIcon}
          onPress={handleCategoryPress}>
          <Icons name="edit" size={22} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const deleteCategory = index => {
    const updatedSubCategoryArr = [...subCategoryArr];
    updatedSubCategoryArr.splice(index, 1);
    setsubCategoryArr(updatedSubCategoryArr);
  };

  const UpdateCategory = () => {
    const handleUpdate = () => {
      const updatedCategory = {
        id: selCat.id,
        name: name,
        amount: amount,
      };
      const updatedSubCategoryArr = [...subCategoryArr];
      updatedSubCategoryArr[selCatIndex] = updatedCategory;
      setsubCategoryArr(updatedSubCategoryArr);
      setName('');
      setAmount('');
      setUpSubCate(false);
    };
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={upSubCat}
        onRequestClose={() => {
          setUpSubCate(!upSubCat);
        }}>
        <View style={styles.modalmainView}>
          <View style={styles.modalView}>
            <View style={styles.closeView}>
              <TouchableOpacity onPress={() => setUpSubCate(false)}>
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
                value={name}
                onChangeText={text => setName(text)}
                keyboardType="default"
              />
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Yearly Budget Amount"
                placeholderTextColor={'#A39E9E'}
                value={amount}
                onChangeText={text => setAmount(text)}
                keyboardType="numeric"
              />
              <PrimaryButton
                style={styles.saveButton}
                text={'Update'}
                textstyle={styles.saveTxt}
                onPress={handleUpdate}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerChildView}>
          <Text style={styles.headerMainTxt} numberOfLines={1}>
            Update Budget
          </Text>
        </View>
        <TouchableOpacity
          style={styles.headerChildView}
          onPress={() => setAddSubCate(!addSubCat)}>
          <Icon name="control-point" size={25} color="#6D27C6" />
          <Text style={styles.headerChildTxt}>new Category</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headingView}>
        <Text style={styles.headingTxt}>Category Name</Text>
        <Text style={styles.headingTxt}>Amount</Text>
      </View>
      {AddCategory()}
      {UpdateCategory()}

      {subCategoryArr.length === 0 ? (
        <Text style={styles.noRecordTxt}>No record Found</Text>
      ) : (
        <View style={styles.listView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={subCategoryArr}
            renderItem={({item, index}) => (
              <ShowCategory
                Name={item.name}
                Amount={item.amount}
                index={index}
              />
            )}
            keyExtractor={(item, index) => index.toString()} //
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CategoryView;
