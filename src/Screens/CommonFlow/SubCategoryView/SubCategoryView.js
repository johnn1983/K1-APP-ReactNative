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

import styles from './SubCategoryViewStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../../Components/PrimaryButton';
import {IMG} from '../../../Constants/ImageConstant';

const SubCategoryView = ({navigation}) => {
  const [addSubCat, setAddSubCate] = useState(false);
  const [upSubCat, setUpSubCate] = useState(false);
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [subCategoryArr, setsubCategoryArr] = useState('');
  const [selCatIndex, setSelCatIndex] = useState(null);
  const [selCat, setSelCat] = useState(null);

  const AddSubCategory = () => {
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
              <Text style={styles.modalTxt}>Add Sub Category</Text>
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Sub Category Name"
                placeholderTextColor={'#A39E9E'}
                value={name}
                onChangeText={text => setName(text)}
                keyboardType="default"
              />
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Budget Per Year"
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

  const ShowSubCategory = ({Name, Amount, index}) => {
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
            onPress={() => deleteSubCategory(index)}>
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
      <TouchableOpacity
        style={styles.listTxtView}
        onPress={handleCategoryPress}>
        <View style={styles.categoryView}>
          <Text numberOfLines={2} style={styles.listTxt2}>
            {Name}
          </Text>
        </View>
        <View style={styles.amountView}>
          <Text numberOfLines={1} style={styles.listTxt2}>
            {Amount}$
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const deleteSubCategory = index => {
    const updatedSubCategoryArr = [...subCategoryArr];
    updatedSubCategoryArr.splice(index, 1);
    setsubCategoryArr(updatedSubCategoryArr);
  };

  const UpdateSubCategory = () => {
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
              <Text style={styles.modalTxt}>Update Sub Category</Text>
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Sub Category Name"
                placeholderTextColor={'#A39E9E'}
                value={name}
                onChangeText={text => setName(text)}
                keyboardType="default"
              />
              <TextInput
                style={styles.modalTxtInput}
                placeholder="Budget Per Year"
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerMainTxt} numberOfLines={1}>
            Business Analytics
          </Text>
        </View>
        <TouchableOpacity
          style={styles.headerChildRightView}
          onPress={() => setAddSubCate(!addSubCat)}>
          <Icon name="control-point" size={25} color="#4A7CC8" />
          <Text style={styles.headerChildTxt}>New Sub Category</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headingView}>
        <Text style={styles.headingTxt}>Sub Category Name</Text>
        <Text style={styles.headingTxt}>Amount</Text>
      </View>
      {AddSubCategory()}
      {UpdateSubCategory()}

      {subCategoryArr.length === 0 ? (
        <Text style={styles.noRecordTxt}>No record Found</Text>
      ) : (
        <View style={styles.listView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={subCategoryArr}
            renderItem={({item, index}) => (
              <ShowSubCategory
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

export default SubCategoryView;
