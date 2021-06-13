import { View, Picker, StyleSheet } from "react-native";
import React, { useState } from "react";


const ParkList = ({parks}) => {


    
    const listOfParkObjects = parks.map((park, index) => {
        return (
            <Picker.Item label={park.parkName} value={park.parkName} />
        );
    });


    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <View>
        <Picker
            selectedValue={selectedValue}
            onValueChange={(park, index) => setSelectedValue(park)}
            >
                {listOfParkObjects}
        </Picker>
    </View>
    )


}


export default ParkList;