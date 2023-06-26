import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ReceiptListStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollViewIndicator} from '@fanchenbao/react-native-scroll-indicator';

const categoryArr = [
  {
    id: 1,
    name: 'Life Insurance',
    expense: '200.00',
    reason: 'yes',
    date: '2022-12-30',
  },
  {
    id: 2,
    name: 'Car Insurance',
    expense: '100.00',
    reason: 'yes',
    date: '2022-12-30',
  },
  {
    id: 3,
    name: 'Education Insurance',
    expense: '220.00',
    reason: 'yes',
    date: '2022-12-30',
  },
  {
    id: 4,
    name: 'House Insurance',
    expense: '290.00',
    reason: 'yes',
    date: '2022-12-30',
  },
  {
    id: 5,
    name: 'Life Insurance',
    expense: '1500.00',
    reason: 'yes',
    date: '2022-12-30',
  },
  {
    id: 6,
    name: 'House Insurance',
    expense: '1000.00',
    reason: 'yes',
    date: '2022-12-30',
  },
];

const ReceiptList = ({navigation, route}) => {
  const userName = route?.params?.userName;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>{userName} Receipt List</Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.topButtonView}>
          <View style={styles.topBTleftView}>
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
          </View>
          <View style={styles.topBTrightView}>
            <TouchableOpacity style={styles.exportButtonView}>
              <Text style={styles.upperButtonTxt}>Export</Text>
              <Icon
                style={styles.buttonImg}
                name="caretright"
                size={8}
                color="#868686"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportButtonView}>
              <Text style={styles.upperButtonTxt}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {isOpen && (
          <ScrollViewIndicator
            horizontal={true}
            indStyle={styles.scrollBar}
            nestedScrollEnabled={true}>
            <View style={styles.flatlistView}>
              <View style={styles.bodyView}>
                <View style={styles.listCategory}>
                  <Text style={styles.listHeaderTxt}>Sub Category</Text>
                </View>
                <View style={styles.listExpense}>
                  <Text style={styles.listHeaderTxt}>Expense</Text>
                </View>
                <View style={styles.listReason}>
                  <Text style={styles.listHeaderTxt}>Reason</Text>
                </View>
                <View style={styles.listDate}>
                  <Text style={styles.listHeaderTxt}>Date</Text>
                </View>
              </View>

              <FlatList
                showsVerticalScrollIndicator={false}
                data={categoryArr}
                renderItem={({item}) => (
                  <View style={styles.listView}>
                    <View style={styles.listCategory}>
                      <Text style={styles.listTxt} numberOfLines={1}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.listExpense}>
                      <Text style={styles.listTxt} numberOfLines={1}>
                        ${item.expense}
                      </Text>
                    </View>
                    <View style={styles.listReason}>
                      <Text style={styles.listTxt} numberOfLines={1}>
                        {item.reason}
                      </Text>
                    </View>
                    <View style={styles.listDate}>
                      <Text style={styles.listTxt} numberOfLines={1}>
                        {item.date}
                      </Text>
                    </View>
                    {/* <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonTxt}>View</Text>
                  </TouchableOpacity> */}
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollViewIndicator>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ReceiptList;
