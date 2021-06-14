import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Polyline} from 'react-native-maps';


const Map = ({region, setRegion, lochLomand, cairngorms, selectedValue}) => {


  if (selectedValue !== "Cairngorms" && selectedValue !== "Loch Lomond"){
    setRegion(region)
  }

  if (selectedValue === "Loch Lomond"){
    setRegion(lochLomand)
}

  if (selectedValue === "Cairngorms"){
  setRegion(cairngorms)

}



console.log(`region:`, region)
console.log(`value:`, selectedValue)

  return(
    <Fragment>
            <MapView 
                style={styles.map}
                initialRegion={region}
            >
            <MapView.Marker
                coordinate={{
                latitude: 56.101491,
                longitude: -4.642252
                }}
                title={"Route: Luss Village"}
                description={"Description: Flat"}
            />
            <Polyline
                coordinates={[
                  { latitude: 37.8025259, longitude: -122.4351431 },
                  { latitude: 37.7896386, longitude: -122.421646 },
                  { latitude: 37.7665248, longitude: -122.4161628 },
                  { latitude: 37.7734153, longitude: -122.4577787 },
                  { latitude: 37.7948605, longitude: -122.4596065 },
                  { latitude: 37.8025259, longitude: -122.4351431 }
                ]}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={6}
              />
            </MapView>
    </Fragment>

    
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

    
