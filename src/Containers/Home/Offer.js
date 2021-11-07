import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';

const DATA = [
  {
    id: '1',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOiREsc88PrzlwJq5Z6qJEyirbsWFTECdUg&usqp=CAU',
  },
  {
    id: '2',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Wlmmtr1_nsBju0JyKWs2_t1Tqrum-jUb2Q&usqp=CAU',
  },
  {
    id: '3',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Wlmmtr1_nsBju0JyKWs2_t1Tqrum-jUb2Q&usqp=CAU',
  },
];
const numColumns = 2;
const WIDTH = Dimensions.get('window').width;

const renderItem = ({item, index}) => (
  <View style={styles.item}>
    <Image source={{uri: item.url}} style={styles.image} />
  </View>
);
const Offer = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Offers</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Offer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.matteBlack,
    marginTop: 20,
  },

  heading: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  item: {
    marginLeft: 10,
    backgroundColor: colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    height: width(50),
    width: width(40),
    marginLeft: 20,
    borderRadius: 8,
  },
  image: {
    width: width(40),
    height: width(50),
    marginRight: 20,
    borderRadius: 8,
  },
});
