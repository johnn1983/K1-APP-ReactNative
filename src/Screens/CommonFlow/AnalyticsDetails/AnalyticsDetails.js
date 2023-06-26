/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';

import styles from './AnalyticsDetailsStyle';
import PrimaryButton from '../../../Components/PrimaryButton';
import Icon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';

const categoryName = [
  {id: 1, name: 'Business Insurance', type: 'General'},
  {id: 2, name: 'Entertainment Expense', type: 'General'},
  {id: 3, name: 'Website Expense', type: 'General'},
  {id: 4, name: 'Taxes', type: 'Company'},
  {id: 5, name: 'Vehicle Expense', type: 'Company'},
  {id: 6, name: 'Employee Benefits', type: 'Company'},
  {id: 7, name: 'Payroll', type: 'Company'},
  {id: 8, name: 'Entertainment Expense', type: 'Employee'},
  {id: 9, name: 'Device Expense', type: 'Employee'},
  {id: 10, name: 'Vehicle Expense', type: 'Employee'},
  {id: 11, name: 'Office Supplie', type: 'Employee'},
  {id: 12, name: 'Website and Software Expenses', type: 'Employee'},
  {id: 13, name: 'Advertising and Marketing ', type: 'Employee'},
  {id: 14, name: 'Business Insurance', type: 'Employee'},
];

const analyticsData = [
  {
    id: 1,
    date: '22 Apr-2023',
    reason: 'Yes',
    amount: '100.00',
    subcategory: 'Vehicle Expense',
    view: 'View',
  },
  {
    id: 2,
    date: '22 Apr-2023',
    reason: 'Yes',
    amount: '100.00',
    subcategory: 'Vehicle Expense',
    view: 'View',
  },
  {
    id: 3,
    date: '22 Apr-2023',
    reason: 'Yes',
    amount: '100.00',
    subcategory: 'Vehicle Expense',
    view: 'View',
  },
];
const overallanalytics = [
  {id: 1, category: 'Total Budget', amount: '7200'},
  {id: 2, category: 'Entertainment/year', amount: '3000'},
  {id: 3, category: 'Expended', amount: '161.10'},
  {id: 4, category: 'Remaining', amount: '2838.90'},
];
const monthlyanalytics = [
  {id: 1, category: 'Budget Expense/month', amount: '600.0', month: 'April'},
  {id: 2, category: 'Entertainment/month', amount: '250.00', month: 'April'},
  {id: 3, category: 'Expenses in April', amount: '87.05', month: 'April'},
  {id: 4, category: 'Remain in April', amount: '162.95', month: 'April'},
  {id: 5, category: 'Expense till April', amount: '161.1', month: 'April'},
  {
    id: 6,
    category: 'Expense thresold till April',
    amount: '1000.00',
    month: 'April',
  },
  {id: 7, category: 'Budget Expense/month', amount: '2931.0', month: 'May'},
  {id: 8, category: 'Entertainment/month', amount: '401.00', month: 'May'},
  {id: 9, category: 'Expenses in May', amount: '100.00', month: 'May'},
  {id: 10, category: 'Remain in May', amount: '262.5', month: 'May'},
  {id: 11, category: 'Expense till May', amount: '193.1', month: 'May'},
  {
    id: 12,
    category: 'Expense thresold till May',
    amount: '1200.00',
    month: 'May',
  },
];

const AnalyticsDetails = ({navigation, route}) => {
  const registerType = route.params.registerType;
  const [monthType, setMothType] = useState('April');
  const [selectedButton, setSelectedButton] = useState(categoryName[0].id);

  const pickerRef = useRef();

  const LeftButtonView = () => {
    return (
      <View style={styles.leftFlatlist}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            registerType === 'General'
              ? categoryName.filter(item => item.type === 'General')
              : registerType === 'Company'
              ? categoryName.filter(item => item.type === 'Company')
              : registerType === 'Employee'
              ? categoryName.filter(item => item.type === 'Employee')
              : categoryName
          }
          renderItem={({item}) => (
            <View>
              <PrimaryButton
                text={item.name}
                style={[
                  styles.leftButton,
                  selectedButton === item.id && styles.selectedButton,
                ]}
                textstyle={[
                  styles.buttonTxt,
                  selectedButton === item.id && styles.selectedButtonText,
                ]}
                onPress={() => setSelectedButton(item.id)}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const Details = ({category, amount}) => {
    return (
      <>
        <View style={styles.detailsView}>
          <View style={styles.leftDetails}>
            <Text numberOfLines={2} style={styles.detailsTxt}>
              {category}
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.rightDetails}>
            <Text numberOfLines={1} style={styles.detailsTxt}>
              {amount}$
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
      </>
    );
  };

  const OverAllView = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={overallanalytics}
        renderItem={({item}) => (
          <Details category={item.category} amount={item.amount} />
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  const MonthlyView = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={monthlyanalytics}
        renderItem={({item}) => {
          if (item.month !== monthType) {
            return null;
          }
          return <Details category={item.category} amount={item.amount} />;
        }}
        keyExtractor={item => item.id}
      />
    );
  };

  const TableView = ({date, reason, amount, subcategory, view}) => {
    return (
      <View style={styles.bodyHeaderView}>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{date}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{reason}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{amount}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <Text style={styles.bodyHeaderTxt}>{subcategory}</Text>
        </View>
        <View style={styles.bodyHeaderTxtView}>
          <TouchableOpacity>
            <Text style={styles.bodyHeaderTxt2}>{view}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        {registerType === 'General' ? (
          <View style={styles.headerView}>
            <Text style={styles.headerTxt}>Expense Analytics</Text>
          </View>
        ) : (
          <View style={styles.headerView2}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrowleft" size={22} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTxt2}>Detail Expense Analytics</Text>
          </View>
        )}

        <View style={styles.mainView}>
          <View style={styles.mainLeftView}>
            <LeftButtonView />
          </View>

          <View style={styles.mainRightView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.rightChildView}>
              <View style={{alignItems: 'center', width: '100%'}}>
                <View style={styles.rightTopView}>
                  <View style={styles.rightHeadView}>
                    <Text style={styles.rightHeadTxt}>Overall</Text>
                  </View>

                  <View style={styles.mainDetailsView}>{OverAllView()}</View>

                  <View style={styles.rightHeadView}>
                    <Text style={styles.rightHeadTxt}>Monthly</Text>
                  </View>

                  <View style={styles.mainDetailsView}>
                    <View style={styles.filterView}>
                      <View style={styles.filterTxtView}>
                        <Text numberOfLines={2} style={styles.filterTxt}>
                          Filter
                        </Text>
                      </View>
                      <View style={styles.verticalLine} />
                      <Picker
                        style={styles.pickerstyle}
                        dropdownIconColor="grey"
                        numberOfLines={1}
                        ref={pickerRef}
                        selectedValue={monthType}
                        onValueChange={(itemValue, itemIndex) =>
                          setMothType(itemValue)
                        }>
                        <Picker.Item label="April" value="April" />
                        <Picker.Item label="May" value="May" />
                        <Picker.Item label="June" value="June" />
                      </Picker>
                    </View>
                    <View style={styles.horizontalLine} />
                    {MonthlyView()}
                  </View>
                </View>

                <View style={styles.rightBottomView}>
                  <View style={styles.tableHeaderView}>
                    <View style={styles.tableHeaderTxtView}>
                      <Text style={styles.tableHeadTxt}>Date</Text>
                    </View>
                    <View style={styles.tableHeaderTxtView}>
                      <Text style={styles.tableHeadTxt}>Expense Reason</Text>
                    </View>
                    <View style={styles.tableHeaderTxtView}>
                      <Text style={styles.tableHeadTxt}>Expense Amount</Text>
                    </View>
                    <View style={styles.tableHeaderTxtView}>
                      <Text style={styles.tableHeadTxt}>Sub Category Name</Text>
                    </View>
                    <View style={styles.tableHeaderTxtView}>
                      <Text style={styles.tableHeadTxt}>View Receipt</Text>
                    </View>
                  </View>

                  <View style={styles.flatlistView}>
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      data={analyticsData}
                      renderItem={({item}) => (
                        <TableView
                          date={item.date}
                          reason={item.reason}
                          amount={item.amount}
                          subcategory={item.subcategory}
                          view={item.view}
                        />
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AnalyticsDetails;
