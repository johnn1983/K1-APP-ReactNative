/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './EmployeeDetailsStyle';
import ReceiptList from '../ReceiptList/ReceiptList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/AntDesign';

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

const EmployeeDetails = ({navigation, route}) => {
  const userName = route?.params?.userName;
  const [value, setValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleBudget = () => {
    setValue('Budget');
    setIsOpen(false);
  };
  const handleExpense = () => {
    setValue('Expense');
    setIsOpen(false);
  };

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
                    onPress={() =>
                      navigation.navigate('ReceiptList', {userName: userName})
                    }>
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
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>
          {userName}{' '}
          {value === 'Budget'
            ? 'Budget'
            : value === 'Expense'
            ? 'Expense'
            : null}{' '}
          Details
        </Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.topButtonView}>
          <View style={styles.topBTleftView}>
            <TouchableOpacity
              style={styles.budgetButtonView}
              onPress={() => setIsOpen(!isOpen)}>
              <Text style={styles.upperButtonTxt}>
                {value === 'Budget'
                  ? 'Budget'
                  : value === 'Expense'
                  ? 'Expense'
                  : 'Select'}
              </Text>
              <Icons
                name={isOpen ? 'caretdown' : 'caretright'}
                size={8}
                style={styles.buttonImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topBTrightView}>
            <TouchableOpacity style={styles.exportButtonView}>
              <Text style={styles.upperButtonTxt}>Export</Text>
              <Icons
                style={styles.buttonImg}
                name="caretright"
                size={8}
                color="#868686"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchButtonView}>
              <Text style={styles.upperButtonTxt}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {isOpen && (
          <View style={styles.selectTypeView}>
            <TouchableOpacity style={styles.selectView} onPress={handleBudget}>
              <Icons name="caretright" size={8} color="black" />
              <Text style={styles.selectTypeTxt}>Budget</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectView} onPress={handleExpense}>
              <Icons name="caretright" size={8} color="black" />
              <Text style={styles.selectTypeTxt}>Expense</Text>
            </TouchableOpacity>
          </View>
        )}

        {value === 'Budget'
          ? BudgetDetails()
          : value === 'Expense'
          ? ExpenseDetails()
          : null}
      </View>
    </SafeAreaView>
  );
};

export default EmployeeDetails;
