import { View, Picker, StyleSheet } from "react-native";
import React, { useState } from "react";


const ParkList = ({parks, onValueChange, selectedValue}) => {


    
    const listOfParkObjects = parks.map((park, id) => {
        return (
            <Picker.Item key={id} label={park.parkName} value={park} />
        );
    });
    


    return (
        <View>
        <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            >
                <Picker.Item label="Choose Park" value="Choose Park" />
                {listOfParkObjects}
        </Picker>
    </View>
    )


}


export default ParkList;