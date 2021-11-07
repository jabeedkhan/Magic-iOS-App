import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';
import Carousel from 'react-native-snap-carousel-fork';

let images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBUEtRF_wzyfdAFOX_sOsIX911K2kFBtcwQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJS9L4f2rv_p2XLoECRHuqEAIiR0hyDoh1Vg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMJddfuiVCmNSNk8skEFXySGHE9gbXCp44A&usqp=CAU',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Slider = () => {
  const [imgActive, setImgActive] = useState(0);

  onchange = images => {
    if (images) {
      const slide = Math.ceil(
        images.contentOffset.x / images.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
        }}>
        <Image
          key={item}
          resizeMode="stretch"
          style={styles.wrap}
          source={{uri: item}}
        />
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Carousel
            data={images}
            sliderWidth={width(100)}
            itemWidth={width(85)}
            renderItem={renderItem}
            loop={true}
          />

          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={index}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default Slider;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.matteBlack,
    marginTop: 30,
  },

  wrap: {
    width: width(85),
    marginHorizontal: 'auto',
    height: HEIGHT * 0.25,
    borderRadius: 4,
  },

  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  dotActive: {
    margin: 3,
    color: '#000',
  },
  dot: {
    margin: 3,
    color: '#fff',
  },
});
