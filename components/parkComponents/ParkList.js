import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import {Picker} from '@react-native-picker/picker';


const ParkList = ({parks, onValueChange, selectedValue}) => {


    
    const listOfParkPickerItems = parks.map((park, id) => {
        return (
            <Picker.Item label={park.parkName} value={park.parkName} key={park.id} />
        );
    });

    return (
        <View>
        <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            >
                <Picker.Item label="Choose Park" value="Choose Park" />
                {listOfParkPickerItems}
        </Picker>
    </View>
    )


}


export default ParkList;