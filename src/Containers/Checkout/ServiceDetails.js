import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';

const ServiceDetails = ({service}) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{service?.disp_name}</Text>
          <Text style={styles.desc}>{service?.description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: `https://magichands.co/magich${service?.image_url}`}}
            style={styles.image}
          />
        </View>
      </View>
    </>
  );
};

export default ServiceDetails;

const styles = StyleSheet.create({
  mainContainer: {flexDirection: 'row', padding: 16, flex: 1},
  nameContainer: {flex: 1},
  title: {fontSize: width(6)},
  desc: {fontSize: width(3)},
  imageContainer: {},
  image: {width: width(20), height: width(20), borderRadius: 8, marginLeft: 8},
});
