import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import colors from '../../Common/colors';

const map = () => {
  const INITIAL_REGION = {
    longitudeDelta: 0.05,
    latitude: 37.7631052842748,
    longitude: -122.40641713142395,
    latitudeDelta: 0,
  };

  return (
    <>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={INITIAL_REGION}
          onRegionChangeComplete={console.log}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="title"
          />
        </MapView>
      </View>
    </>
  );
};

export default map;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.matteBlack,
    flex: 1,
    height: 320,
    width: '95%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
