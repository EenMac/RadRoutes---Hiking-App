import { View, Picker, StyleSheet } from "react-native";
import React, { useState } from "react";


const ParkList = ({parks, onValueChange, selectedValue}) => {


    
    const listOfParkPickerItems = parks.map((park, id) => {
        return (
            <Picker.Item label={park.parkName} value={park.parkName} key={park.id} />
        );
    });

    return (
        <View style={{borderwidth: 0}}>
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