import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Polyline, PROVIDER_GOOGLE } from 'react-native-maps';


const Map = ({region, setRegion, lochLomand, cairngorms, selectedValue, parks, routes, coordinates}) => {


  if (selectedValue !== "Cairngorms" && selectedValue !== "Loch Lomond"){
    setRegion(region)
  }

  if (selectedValue === "Loch Lomond"){
    setRegion(lochLomand)
}

  if (selectedValue === "Cairngorms"){
  setRegion(cairngorms)

}

const arrayOfRoutes = coordinates.map((coordinate, index) => {
  return (
    { latitude: coordinate.latitude, longitude: coordinate.longitude }
  )
})

console.log('coordinates', JSON.stringify(arrayOfRoutes))


console.log(`region:`, region)
console.log(`value:`, selectedValue)

mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      {
        "saturation": 100
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

if (arrayOfRoutes.length !== 0){

return(
    <Fragment>
            <MapView 
                style={styles.map}
                initialRegion={region}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                
            >
            <MapView.Marker
                coordinate={{
                latitude: 56.101491, longitude: -4.642252
                }}
                title={"Route: Luss Village"}
                description={"Description: Flat"}
            />
            <Polyline
                coordinates={[
                  { latitude: coordinates[0].latitude, longitude: coordinates[0].longitude },
                  { latitude: coordinates[1].latitude, longitude: coordinates[1].longitude },
                  { latitude: coordinates[2].latitude, longitude: coordinates[2].longitude },
                  { latitude: coordinates[3].latitude, longitude: coordinates[3].longitude },
                  { latitude: coordinates[4].latitude, longitude: coordinates[4].longitude },
                  { latitude: coordinates[5].latitude, longitude: coordinates[5].longitude }
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

            {/* <Polyline
                coordinates={arrayOfRoutes[6], arrayOfRoutes[7], arrayOfRoutes[8], arrayOfRoutes[9], arrayOfRoutes[10], arrayOfRoutes[11]}
                  
                
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
              /> */}
            </MapView>
    </Fragment>

              
);
}

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
