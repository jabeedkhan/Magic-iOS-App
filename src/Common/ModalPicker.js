import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



const STATE = ['Maharashtra', 'Gujrath'];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = props => {
  const onPressItem = option => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = STATE.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => props.changeModalVisibility(false)}
        style={styles.container}>
        <Text style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
          <ScrollView>{option}</ScrollView>
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
