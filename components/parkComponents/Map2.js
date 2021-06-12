import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const Map2 = ({parks}) => {

    const parkItems = parks.map((park, index) => {
        return <Text park={park} key={index}>{park.name}</Text>
    })
    
    

return(
    <MapView
    style={styles.map}
    initialRegion={{
    latitude: 40.0000,
    longitude: 35.0000,
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

export default Map2;
