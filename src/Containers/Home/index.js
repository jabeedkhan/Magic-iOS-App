import React from 'react';
import Offer from './Offer';
import Services from './Services';
import Slider from './Slider';
import CoustomHeader from './CoustomHeader';
import {View} from 'react-native';
import colors from '../../Common/colors';

const Home = () => {
  return (
    <>
      <View
        style={{flex: 1, backgroundColor: colors.white, paddingBottom: 100}}>
        <CoustomHeader title="Home" />
        {/* <SearchBar /> */}
        <Slider />
        <Services />
        <Offer />
      </View>
    </>
  );
};

export default Home;
