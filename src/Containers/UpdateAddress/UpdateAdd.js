import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../Common/colors';

const UpdateAdd = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.addContainer}>
          <Image
            style={styles.addIcon}
            source={require('../../assets/images/add.png')}
          />
          <Text style={styles.addText}>Add a new Address</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.editContainer}>
        <Text style={styles.name}>User</Text>
        <Text style={styles.add}>Mumbai, maharashtra, 401402</Text>
        <Text style={styles.number}>+91 1234567</Text>
        <View style={styles.butns}>
          <TouchableOpacity style={styles.butn}>
            <Text style={styles.butntext}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butn}>
            <Text style={styles.butntext}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.editContainer}>
        <Text style={styles.name}>User</Text>
        <Text style={styles.add}>Mumbai, maharashtra, 401402</Text>
        <Text style={styles.number}>+91 1234567</Text>
        <View style={styles.butns}>
          <TouchableOpacity style={styles.butn}>
            <Text style={styles.butntext}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butn}>
            <Text style={styles.butntext}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default UpdateAdd;

const styles = StyleSheet.create({
  addContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 50,
    paddingTop: 15,
    paddingLeft: 100,
  },
  addIcon: {
    width: 15,
    height: 15,
    marginRight: 15,
  },

  addText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  editContainer: {
    backgroundColor: colors.white,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },

  add: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  number: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  butns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // paddingHorizontal: 40,
  },
  butn: {
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.secondary,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginBottom: 10,
  },
  butntext: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
