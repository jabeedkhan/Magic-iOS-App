import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import ServiceDetails from '../Checkout/ServiceDetails';
const OrderServices = ({order}) => {
  return (
    <>
      <ServiceDetails
        service={{
          disp_name: order?.service_name,
          description: order?.service_description,
          image_url: order?.service_image_url,
        }}
      />
    </>
  );
};

export default OrderServices;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
});
