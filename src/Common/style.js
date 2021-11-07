import {Dimensions, StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const width = w => {
  return (w * DEVICE_WIDTH) / 100;
};

export const height = h => {
  return (h * DEVICE_HEIGHT) / 100;
};

export const commonStyles = StyleSheet.create({
  head: {
    fontSize: width(5),
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
