import React, {useEffect, useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../Common/colors';
import {useNavigation} from '@react-navigation/native';
import {Store} from '../../store/store';
import {getBookingHistory} from '../../actions/booking';
import {width} from '../../Common/style';
import logo from '../../assets/images/logo.png';

const BookingHistoryMain = () => {
  const navigation = useNavigation();
  const {state, dispatch} = useContext(Store);
  useEffect(() => {
    if (Array.isArray(state?.booking?.history)) getBookingHistory(dispatch);
  }, []);
  if (
    !Array.isArray(state?.booking?.history) ||
    state?.booking?.history?.length === 0
  ) {
    return (
      <View style={styles.loginCtaContainer}>
        <View style={styles.logo_section}>
          <Image source={logo} alt="Magic Hands" />
        </View>
        {state?.common?.user?.token ? (
          <TouchableOpacity style={styles.loginContainer}>
            <Text style={styles.loginCta}>{`No order found`}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginCta}>
              {`Please Login to See Your Order History`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
  return (
    <>
      <ScrollView>
        {state?.booking?.history?.map(item => (
          <View style={styles.container}>
            <View style={styles.orderContainer}>
              <Image
                source={{
                  uri: `https://magichands.co/magich${item?.service_image_url}`,
                }}
                style={styles.orderIcon}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('OrderDetails', {
                    service: {},
                    address: {},
                    order: item,
                  })
                }>
                <View style={styles.col}>
                  <Text style={styles.bookingRef}>
                    Booking Reference: #{item?.booking_reference}
                  </Text>
                  <Text style={styles.orderText}>{item.service_name}</Text>
                  <View style={styles.dateContainer}>
                    <Text style={styles.date}>{item?.add_date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default BookingHistoryMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backdroundWhite,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  orderIcon: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  orderText: {
    fontSize: width(6),
    color: colors.primaryBlack,
    marginLeft: width(5),
    fontWeight: 'bold',
  },

  bookingRef: {
    fontSize: width(3),
    color: colors.success,
    marginLeft: width(5),
  },
  priceBox: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: width(5),
  },
  price: {
    fontSize: 20,
    color: colors.primaryBlack,
    fontWeight: 'bold',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: width(5),
  },
  date: {
    fontSize: width(3),
    color: colors.black,
    fontWeight: 'bold',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  btns: {
    marginLeft: 70,
    backgroundColor: colors.primary,
    width: 100,
    height: 35,
    justifyContent: 'center',
    top: -25,
  },

  btn: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  loginCtaContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.backdroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    backgroundColor: colors.submit,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 120,
  },
  loginCta: {
    fontSize: width(4),
    textAlign: 'center',
    color: colors.white,
  },
  logo_section: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
