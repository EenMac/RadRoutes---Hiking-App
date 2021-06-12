import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {

    return(
      <MapView
      style={styles.map}
      initialRegion={{
      latitude: 57.043804,
      longitude: -3.603306,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '40%',
    width: '100%'
  }
});

export default Map;

    
