/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './EmployeeDetailsStyle';
import {IMG} from '../../../Constants/ImageConstant';
import ReceiptList from '../ReceiptList/ReceiptList';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmployeeDetails = ({navigation, route}) => {
  const userName = route.params.userName;

  const [isbudget, setIsBudget] = useState(false);
  const categoryArr = [
    {id: 1, name: 'Business Insurance', expense: '200.00'},
    {id: 2, name: 'Travel', expense: '100.00'},
    {id: 3, name: 'Sports', expense: '220.00'},
    {id: 4, name: 'Vehicle Expense', expense: '290.00'},
    {id: 5, name: 'Website', expense: '1500.00'},
    {id: 6, name: 'Software', expense: '1000.00'},
    {id: 7, name: 'Office Supplie', expense: '80.00'},
  ];
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonTxt}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ExpenseDetails = () => {
    return (
      <>
        <View style={styles.bodyView}>
          <Text style={styles.categortTxt}>Category</Text>
          <Text style={styles.totalTxt}>Total Expense</Text>
          <Text style={styles.receiptTxt}>Receipt</Text>
        </View>
        <View style={styles.flatlistView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={categoryArr}
            renderItem={({item}) => (
              <View style={styles.listView}>
                <View style={styles.listLeftView}>
                  <Text style={styles.listTxt} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
                <View style={styles.listRightView}>
                  <Text style={styles.listTxt} numberOfLines={1}>
                    ${item.expense}
                  </Text>
                  <TouchableOpacity
                    style={styles.buttonView}
                    onPress={() => navigation.navigate(ReceiptList)}>
                    <Text style={styles.buttonTxt}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </>
    );
  };

  const BudgetDetails = () => {
    return (
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
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>
          {userName}'s {isbudget ? 'Expense' : 'Budget'} Details
        </Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.topButtonView}>
          <TouchableOpacity
            style={styles.budgetButtonView}
            onPress={() => setIsBudget(!isbudget)}>
            <Text style={styles.upperButtonTxt}>
              {isbudget ? 'Expense' : 'Budget'}
            </Text>
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
        </View>

        {isbudget ? ExpenseDetails() : BudgetDetails()}
        {/* <ExpenseDetails />
        <BudgetDetails /> */}
      </View>
    </View>
  );
};

export default EmployeeDetails;
