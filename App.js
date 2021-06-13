import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Map2 from './components/parkComponents/Map2';
import Map from './components/parkComponents/Map';
import UserContainer from './containers/UserContainer';
import ParkContainer from './containers/ParkContainer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Request from './helpers/Request';
import {useState, useEffect} from 'react';

export default function App() {

  const [parks, setParks] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [users, setUsers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [mapProperty, setMapProperty] = useState(null);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  useEffect(() => {
    setLatitude(4.1246)
    setLongitude(56.456)
  })


    // function changeMapProperty(){
    //   if(selectedValue !== null){
    //     for (let i=0; i < parks.length; i++){
    //       if(selectedValue === parks[i].parkName){
    //         setMapProperty(parks[i])
    //       }
    //     }
    //   }
    // }

    // useEffect(() => {
    //   changeMapProperty()
    // })

  const onValueChange= function(park){
    setSelectedValue(park)}

  function MyProfile() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <UserContainer/>
    </View>
    );
    }
    
    function Parks() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ParkContainer parks={parks} onValueChange={onValueChange} selectedValue={selectedValue}/>
        <Map parks={parks} mapProperty={mapProperty} longitude={longitude} latitude={latitude} region={region}/>
    </View>
    );
    }
    
    function MyRoutes() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is My Routes</Text>
        </View>
        );
        }
    
    function LogOut() {
        return (
          null
        );
        }
    
    const Tab = createMaterialBottomTabNavigator();
  
    useEffect(() => {
      fetch("http://localhost:8080/api/parks")
      .then(res => res.json())
      .then(data => setParks(data))
      .catch(error => console.log(error))
    }, [parks.values])

    useEffect(() => {
      fetch("http://localhost:8080/api/routes")
      .then(res => res.json())
      .then(data => setRoutes(data))
      .catch(error => console.log(error))
    }, [routes.values])

    useEffect(() => {
      fetch("http://localhost:8080/api/coordinates")
      .then(res => res.json())
      .then(data => setCoordinates(data))
      .catch(error => console.log(error))
    }, [coordinates.values])

    useEffect(() => {
      fetch("http://localhost:8080/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
    }, [users.values])
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={false}
        activeColor="#EFDECD"
        inactiveColor="#F0F8FF"
        barStyle={{ backgroundColor: "#228B22"	 }}
      >
    <Tab.Screen name="My Profile" component={MyProfile} options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="head-check" color={color} size={26} />
          ),
        }}/>
    <Tab.Screen name="Parks" component={Parks} options={{
          tabBarLabel: 'Parks',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pine-tree" color={color} size={26} />
          ),
        }}
    />
    <Tab.Screen name="My Routes" component={MyRoutes} options={{
          tabBarLabel: 'My Routes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shoe-print" color={color} size={26} />
          ),
        }}
    />
    <Tab.Screen name="Log Out" component={LogOut} options={{
          tabBarLabel: 'Log Out',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
