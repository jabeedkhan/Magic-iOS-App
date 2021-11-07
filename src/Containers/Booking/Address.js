import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../Common/colors';
import ModalPicker from '../../Common/ModalPicker';
const Address = () => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState('State');
  

  const changeModalVisibility = bool => {
    setisModalVisible(bool);
  };

  const setData = option => {
    setchooseData(option);
  };
  return (
    <>
      <View style={styles.addContainer}>
        {/* <Text style={styles.heading}>booking Services</Text> */}
        <View>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => changeModalVisibility(true)}>
            <Text style={styles.text}>{chooseData}</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={isModalVisible}
            nRequestClose={() => changeModalVisibility(false)}>
            <ModalPicker
              changeModalVisibility={changeModalVisibility}
              setData={setData}
            />
          </Modal>
        </View>

      </View>
    </>
  );
};

export default Address;

const styles = StyleSheet.create({
  addContainer: {},
  heading: {
    color: colors.primary,
    fontSize:20
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    marginVertical: 20,
    fontSize: 20,
  },
  dropdown: {
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    margin: 20,
    borderRadius: 5,
  },
});
