import React, {useContext, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import colors from '../../Common/colors';
import ServiceDetail from './ServiceDetails';
import CommonHeader from '../../components/CommonHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import AddressDetails from './AddressDetails';
import PaymentMethod from './PaymentMethod';
import {submitBooking} from '../../services/booking';
import {Store} from '../../store/store';

const Checkout = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {state} = useContext(Store);
  const {service, address, type = 0} = route.params;
  const [loader, setLoader] = useState(false);
  const submit = async () => {
    if (loader) {
      return;
    }
    setLoader(true);
    try {
      const req = {
        service_id: service?.service_id,
        customer_id: state?.common?.profile?.user?.id,
        status: service.sno,
        service_address: address?.address,
        city_id: address?.city?.city_code,
        state_id: address?.state?.state_code,
        service_id: service.sno,
        sub_service_id: '',
        time: new Date().getTime(),
      };
      const res = await submitBooking(req);
      console.log(res);
      if (res?.status) {
        navigation.navigate('OrderDetails', {
          service,
          address,
          order: res?.data[0],
        });
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <SafeAreaView>
        <CommonHeader headText="Checkout" />
        <ScrollView>
          <View style={styles.BookingContainer}>
            {/* <Text>{type}</Text> */}
            {service && <ServiceDetail service={service} />}
            <AddressDetails address={address} type={type} />
            <PaymentMethod />
            <View style={styles.submitContainer}>
              <TouchableOpacity
                style={styles.orderBtn}
                onPress={submit}
                activeOpacity={loader ? 1 : 0.7}>
                {loader ? (
                  <ActivityIndicator size="small" color={colors.white} />
                ) : (
                  <Text style={styles.proceedBtn}>Proceed to Order</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  BookingContainer: {
    flex: 1,
    backgroundColor: colors.matteBlack,
    // height: 100,
  },
  submitContainer: {padding: 16},
  orderBtn: {backgroundColor: colors.submit, padding: 10, alignItems: 'center'},
  proceedBtn: {
    color: colors.white,
  },
});
