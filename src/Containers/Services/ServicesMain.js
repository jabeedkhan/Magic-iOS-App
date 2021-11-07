import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../Common/colors';
import {useNavigation} from '@react-navigation/native';

const ServicesMain = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.headerIcon}
          />
          <Text style={styles.headerText}>Services</Text>
        </View> */}
        <View style={styles.orderContainer}>
          <Image
            source={require('../../assets/images/car-service.png')}
            style={styles.orderIcon}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ServiceDetails')}>
            <View style={styles.col}>
              <Text style={styles.orderText}>Car Services</Text>
              <View style={styles.priceBox}>
                <Text style={styles.price}>Rs.1111</Text>
                <Text style={styles.date}>27th july 2021</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.orderContainer}>
          <Image
            source={require('../../assets/images/plumber.png')}
            style={styles.orderIcon}
          />
          <View style={styles.col}>
            <Text style={styles.orderText}>Plumbing </Text>
            <View style={styles.priceBox}>
              <Text style={styles.price}>Rs.1111</Text>
              <Text style={styles.date}>27th july 2021</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ServicesMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backdroundWhite,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  headerIcon: {
    width: 40,
    height: 40,
  },
  headerText: {
    color: colors.black,
    fontSize: 20,
    marginTop: 8,
  },
  orderContainer: {
    width: '90%',
    height: 100,
    backgroundColor: colors.primary,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  orderIcon: {
    width: 70,
    height: 70,
  },
  orderText: {
    fontSize: 20,
    color: colors.primaryBlack,
    marginLeft: 30,
    fontWeight: 'bold',
  },

  priceBox: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 30,
  },
  price: {
    fontSize: 20,
    color: colors.primaryBlack,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 5,
    marginLeft: 70,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
});
