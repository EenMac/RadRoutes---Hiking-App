import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const Map = ({parks, mapProperty, latitude, longitude, region}) => {

    // const newLatitude = function(){
    //   if(mapProperty !== null){
    //     return mapProperty.latitude
    //   }return 56.0000
    // }


    // const latitudeWorking = newLatitude();
    // const longitudeWorking = newLongitude();

    // const newLongitude = function(){
    //   if(mapProperty !== null){
    //     return mapProperty.longitude
    //   }return -4.0000
    // }
    // console.log(newLatitude);
    

    
  //   return(
  //     <MapView
  //     style={styles.map}
  //     initialRegion={{
  //     latitude: 56.124,
  //     longitude: -4.456,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   }}
  // />

  return(
    <MapView
    style={styles.map}
    initialRegion={{region}}
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

    
