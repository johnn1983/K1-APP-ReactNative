/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './ExpenseListStyle';

const ExpenseList = ({navigation}) => {
  const expensList = [
    {id: 1, name: 'Entertainment', budget: '3000', expense: '1621.10'},
    {id: 2, name: 'Device Expense', budget: '1000', expense: '400.00'},
    {id: 3, name: 'Vehicle Expense', budget: '1000', expense: '150.50'},
    {id: 4, name: 'Office Supplie', budget: '500', expense: '74.05'},
    {id: 5, name: 'Travel', budget: '5000', expense: '0.00'},
    {id: 6, name: 'Sports', budget: '1500', expense: '161.10'},
  ];
  const CardComponent = ({name, budget, expense}) => {
    const expensePercentage = parseFloat(expense / budget) * 100;
    const width = expensePercentage + '%';

    return (
      <View style={styles.cardComponent}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.cardMainTxt}>Budget Category</Text>
          <Text style={styles.cardChildTxt}>{name}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.cardMainTxt}>Budget</Text>
          <Text style={styles.cardChildBlackTxt}>{budget}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.cardMainTxt}>Expense</Text>
          <Text style={styles.cardChildRedTxt}>- {expense}</Text>
        </View>
        <View style={styles.hLine} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.cardMainTxt}>Remaining Budget</Text>
          <Text style={styles.cardChildGreenTxt}>
            {parseFloat(budget - expense)}
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Expense List</Text>
      </View>

      <View style={styles.expenseFlatList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={expensList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardComponent
              name={item.name}
              budget={item.budget}
              expense={item.expense}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExpenseList;
