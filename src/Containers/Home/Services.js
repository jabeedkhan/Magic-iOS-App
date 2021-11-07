import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';

const numColumns = 3;

const Services = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

  const getServices = async () => {
    try {
      const response = await fetch('https://magichands.co/magich/api/services');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <View>
        <FlatList
          style={styles.container}
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate(`Booking`, {service: item, test: 'mohit'})
              }>
              <Image
                source={{uri: `https://magichands.co/magich${item?.image_url}`}}
                style={styles.image}
              />
              <Text style={styles.title}>{item.disp_name}</Text>
            </TouchableOpacity>
          )}
          numColumns={numColumns}
        />
      </View>
    </>
  );
};

export default Services;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    width: width(30),
    marginHorizontal: width(1.5),
    height: width(30),
    top: width(0),
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 30,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    textTransform: 'capitalize',
    marginTop: 10,
    position: 'absolute',
    color: colors.white,
    textShadowColor: colors.black,
    textShadowRadius: 20,
    bottom: 10,
  },
  image: {
    width: width(30),
    height: width(30),
    position: 'absolute',
    borderRadius: 8,
  },
});
