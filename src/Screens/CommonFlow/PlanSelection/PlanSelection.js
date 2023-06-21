/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import styles from './PlanSelectionStyle';
import {IMG} from '../../../Constants/ImageConstant';
import PrimaryButton from '../../../Components/PrimaryButton';
import PaymentMethod from '../PaymentMethod/PaymentMethod';

const PlanSelection = ({navigation, route}) => {
  const registerType = route.params.registerType;
  const [basic, setBasic] = useState(false);
  const [extended, setExtended] = useState(false);
  const [silver, setSilver] = useState(false);
  const [gold, setGold] = useState(false);
  const [premium, setPremium] = useState(false);
  const [id, setId] = useState(1);

  const handleBasic = () => {
    setBasic(!basic);
    setExtended(false);
    setSilver(false);
    setGold(false);
    setPremium(false);
    setId(1);
  };
  const handleExtended = () => {
    setExtended(!extended);
    setBasic(false);
    setSilver(false);
    setGold(false);
    setPremium(false);
    setId(2);
  };
  const handleSilver = () => {
    setSilver(!silver);
    setBasic(false);
    setExtended(false);
    setGold(false);
    setPremium(false);
    setId(3);
  };
  const handleGold = () => {
    setGold(!gold);
    setBasic(false);
    setExtended(false);
    setSilver(false);
    setPremium(false);
    setId(4);
  };
  const handlePremium = () => {
    setPremium(!premium);
    setBasic(false);
    setExtended(false);
    setSilver(false);
    setGold(false);
    setId(5);
  };

  const RightArrow = () => {
    return (
      <Image
        style={styles.arrowImg}
        source={IMG.ArrowIcons.RightArrow}
        resizeMode="center"
      />
    );
  };
  const DownArrow = () => {
    return (
      <Image
        style={styles.arrowImg}
        source={IMG.ArrowIcons.DownArrow}
        resizeMode="center"
      />
    );
  };

  const OpenView = () => {
    return (
      <View style={styles.openView}>
        <View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>Category Itemization (10)</Text>
          </View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>Sub Category (0)</Text>
          </View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>Budget $40</Text>
          </View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>Number of user (1)</Text>
          </View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>
              Number of receipt per month (25)
            </Text>
          </View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>Reports per month (25)</Text>
          </View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>Basic alerts available</Text>
          </View>
          <View style={styles.txtView}>
            <RightArrow />
            <Text style={styles.openViewTxt}>Tech Support (Email)</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          {id === 1 ? (
            <Text style={styles.freeTxt}>Subscription free</Text>
          ) : id === 2 ? (
            <Text style={styles.freeTxt}>
              Subscription fee <Text style={styles.priceTxt}>$100.00</Text>
            </Text>
          ) : id === 3 ? (
            <Text style={styles.freeTxt}>
              Subscription fee <Text style={styles.priceTxt}>$150.00</Text>
            </Text>
          ) : id === 4 ? (
            <Text style={styles.freeTxt}>
              Subscription fee <Text style={styles.priceTxt}>$200.00</Text>
            </Text>
          ) : id === 5 ? (
            <Text style={styles.freeTxt}>
              Subscription fee <Text style={styles.priceTxt}>$250.00</Text>
            </Text>
          ) : null}
          <PrimaryButton
            text={'Purchase'}
            style={styles.purchaseButton}
            textstyle={styles.buttonTxt}
            onPress={() =>
              navigation.navigate('PaymentMethod', {registerType: registerType})
            }
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageView}>
          <Image source={IMG.CompanyLogo.logoBig} resizeMode="center" />
        </View>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>Plan Selection</Text>
        </View>

        <View style={styles.bodyView}>
          <TouchableOpacity style={styles.mainView} onPress={handleBasic}>
            <View style={styles.mainchildView}>
              <Image
                style={styles.imgType}
                source={IMG.ValueIcons.Basic}
                resizeMode="center"
              />
              <Text style={styles.mainTxt}>Basic</Text>
            </View>
            {basic === false ? <RightArrow /> : <DownArrow />}
          </TouchableOpacity>

          {basic === true ? <OpenView /> : null}

          <TouchableOpacity style={styles.mainView} onPress={handleExtended}>
            <View style={styles.mainchildView}>
              <Image
                style={styles.imgType}
                source={IMG.ValueIcons.Extended}
                resizeMode="center"
              />
              <Text style={styles.mainTxt}>Extended</Text>
            </View>
            {extended === false ? <RightArrow /> : <DownArrow />}
          </TouchableOpacity>

          {extended === true ? <OpenView key="extended" /> : null}

          <TouchableOpacity style={styles.mainView} onPress={handleSilver}>
            <View style={styles.mainchildView}>
              <Image
                style={styles.imgType}
                source={IMG.ValueIcons.Silver}
                resizeMode="center"
              />
              <Text style={styles.mainTxt}>Silver</Text>
            </View>
            {silver === false ? <RightArrow /> : <DownArrow />}
          </TouchableOpacity>

          {silver === true ? <OpenView key="Silver" /> : null}

          <TouchableOpacity style={styles.mainView} onPress={handleGold}>
            <View style={styles.mainchildView}>
              <Image
                style={styles.imgType}
                source={IMG.ValueIcons.Gold}
                resizeMode="center"
              />
              <Text style={styles.mainTxt}>Gold</Text>
            </View>
            {gold === false ? <RightArrow /> : <DownArrow />}
          </TouchableOpacity>

          {gold === true ? <OpenView key="Gold" /> : null}

          <TouchableOpacity style={styles.mainView} onPress={handlePremium}>
            <View style={styles.mainchildView}>
              <Image
                style={styles.imgType}
                source={IMG.ValueIcons.Premium}
                resizeMode="center"
              />
              <Text style={styles.mainTxt}>Premium</Text>
            </View>
            {premium === false ? <RightArrow /> : <DownArrow />}
          </TouchableOpacity>

          {premium === true ? <OpenView key="Premium" /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanSelection;
