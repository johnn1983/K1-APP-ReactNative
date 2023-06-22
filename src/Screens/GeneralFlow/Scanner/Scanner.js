/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import styles from './ScannerStyle';
import ProfileView from '../../../Components/ProfileView';

import Statistics from '../../CommonFlow/Statistics/Statistics';
import {IMG} from '../../../Constants/ImageConstant';
import PrimaryButton from '../../../Components/PrimaryButton';

const Scanner = ({navigation}) => {
  const [isScan, setIsScan] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [isCategory, setIscategory] = useState(false);
  const [isStyle, setIsStyle] = useState(false);
  const [isProcess, setIsProcess] = useState(false);
  const [store, setStore] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [note, setNote] = useState();
  const [purchaseDate, setPurchaseDate] = useState();
  const [id, setId] = useState(1);

  const handleScanner = () => {
    setIsScan(true);
  };
  const handleCamera = () => {
    setIsSelect(!isSelect);
    setIsScan(false);
    setIsStyle(!isStyle);
  };
  const handleCategory = () => {
    setIscategory(!isCategory);
  };
  const handleChooseCategory = () => {
    setIscategory(false);
    setIsSelect(false);
    setStore(!store);
    setIsProcess(true);
  };
  const handleNextSelect = () => {
    setIsSelect(false);
    setIsProcess(!isProcess);
  };

  const increment = () => {
    if (id < 4) {
      setId(prevId => prevId + 1);
    }
  };
  const decrement = () => {
    if (id > 1) {
      setId(prevId => prevId - 1);
    } else {
      setIsSelect(true);
      setIsProcess(false);
    }
  };

  const ChooseReceipt = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isScan}
        onRequestClose={() => {
          setIsScan(!isScan);
        }}>
        <View style={{flex: 1}}>
          <View style={styles.modalView} />

          <View style={styles.modalButtonView}>
            <TouchableOpacity style={styles.modalButton} onPress={handleCamera}>
              <Image
                style={styles.modalImg}
                source={IMG.ExtraLogo.Filelogo}
                resizeMode="center"
              />
              <Text style={styles.modalTxt}>Device Storage</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={handleCamera}>
              <Image
                style={styles.modalImg}
                source={IMG.ExtraLogo.Camearlogo}
                resizeMode="center"
              />
              <Text style={styles.modalTxt}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const CategoryView = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCategory}
        onRequestClose={() => {
          setIscategory(!isCategory);
        }}>
        <View style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
          <View style={styles.categoryModal}>
            <TouchableOpacity
              style={styles.categoryTxtView}
              onPress={handleChooseCategory}>
              <Text style={styles.categoryTxt}>Business Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryTxtView}
              onPress={handleChooseCategory}>
              <Text style={styles.categoryTxt}>Entertainment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryTxtView}
              onPress={handleChooseCategory}>
              <Text style={styles.categoryTxt}>
                Website and Software Development
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryTxtView}
              onPress={handleChooseCategory}>
              <Text style={styles.categoryTxt}>Vehicale Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryTxtView}
              onPress={handleChooseCategory}>
              <Text style={styles.categoryTxt}>Office Suplies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryTxtView}
              onPress={handleChooseCategory}>
              <Text style={styles.categoryTxt}>Advertising And marketing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const SelectCategory = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.selectCategoryView}
          onPress={handleCategory}>
          <Text style={styles.selectCategoryTxt}>Select category</Text>
          <Image source={IMG.ExtraLogo.DownArrow} resizeMode="center" />
        </TouchableOpacity>

        <View style={styles.buttonView}>
          <PrimaryButton
            text={'Next'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={handleNextSelect}
          />
        </View>
      </>
    );
  };

  const StoreName = () => {
    return (
      <>
        <View style={styles.showDetailsView}>
          <Text style={styles.detailsTxt}>Store Name</Text>
          {/* <View style={styles.showDetailsTxt} /> */}
          <TextInput
            style={styles.input}
            // onChangeText={text => setStore(text)}
            // value={store}
          />
        </View>
        <View style={styles.buttonView2}>
          <PrimaryButton
            text={'Back'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={decrement}
          />
          <PrimaryButton
            text={'Next'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={increment}
          />
        </View>
      </>
    );
  };
  const TotalAmount = () => {
    return (
      <>
        <View style={styles.showDetailsView}>
          <Text style={styles.detailsTxt}>Total Amount</Text>
          <TextInput
            style={styles.input}
            // onChangeText={text => setTotalAmount(text)}
            // value={totalAmount}
          />
        </View>
        <View style={styles.buttonView2}>
          <PrimaryButton
            text={'Back'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={decrement}
          />
          <PrimaryButton
            text={'Next'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={increment}
          />
        </View>
      </>
    );
  };
  const Note = () => {
    return (
      <>
        <View style={styles.showDetailsView}>
          <Text style={styles.detailsTxt}>Note</Text>
          <TextInput
            style={styles.input}
            // onChangeText={text => setNote(text)}
            // value={note}
          />
        </View>
        <View style={styles.buttonView2}>
          <PrimaryButton
            text={'Back'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={decrement}
          />
          <PrimaryButton
            text={'Next'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={increment}
          />
        </View>
      </>
    );
  };

  const PurchasingDate = () => {
    return (
      <>
        <View style={styles.showDetailsView}>
          <Text style={styles.detailsTxt}>Purchasing Date</Text>
          <TextInput
            style={styles.input}
            // onChangeText={text => setPurchaseDate(text)}
            // value={purchaseDate}
          />
        </View>
        <View style={styles.buttonView2}>
          <PrimaryButton
            text={'Back'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={decrement}
          />
          <PrimaryButton
            text={'Next'}
            style={styles.primaryButton}
            textstyle={styles.buttonText}
            onPress={increment}
          />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 0.3}}>
        <ProfileView onPress={() => navigation.navigate(Statistics)} />
      </View>

      <View style={styles.bodyView}>
        <View style={isStyle === false ? styles.scanView : styles.scanView2}>
          {isStyle === true ? (
            <Image
              style={styles.bankReceiptImg}
              source={IMG.ExtraLogo.BankReceipt}
              resizeMode="center"
            />
          ) : null}
          <TouchableOpacity onPress={handleScanner} disabled={isProcess}>
            <Text style={styles.scanTxt}>Scan a Receipt</Text>
          </TouchableOpacity>
        </View>

        <CategoryView />
        <ChooseReceipt />

        {isSelect === true ? <SelectCategory /> : null}
        {isProcess === true && id === 1 ? (
          <StoreName />
        ) : id === 2 ? (
          <TotalAmount />
        ) : id === 3 ? (
          <Note />
        ) : id === 4 ? (
          <PurchasingDate />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Scanner;
