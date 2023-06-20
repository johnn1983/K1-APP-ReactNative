import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './ReceiptListStyle';
import {IMG} from '../../../Constants/ImageConstant';

const ReceiptList = ({navigation}) => {
  const categoryArr = [
    {id: 1, name: 'Business Insurance', expense: '200.00'},
    {id: 2, name: 'Travel', expense: '100.00'},
    {id: 3, name: 'Sports', expense: '220.00'},
    {id: 4, name: 'Vehicle Expense', expense: '290.00'},
    {id: 5, name: 'Website', expense: '1500.00'},
    {id: 6, name: 'Software', expense: '1000.00'},
    {id: 7, name: 'Office Supplie', expense: '80.00'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Nabila's Receipt List</Text>
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
        </View>

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
                  <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonTxt}>View</Text>
                  </TouchableOpacity>
                  <Text>hello</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default ReceiptList;
