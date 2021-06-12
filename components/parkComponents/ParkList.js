import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';

const ParkList = ({parks}) => {

    const parkItems = parks.map((park, index) => {
        return (
            <View key={park.index} style={{margin: 10}}>
            <Text>{park.parkName}</Text>
            </View>
        )


    })

    
    
        return <View>{parkItems()}</View>;
    

}

export default ParkList;