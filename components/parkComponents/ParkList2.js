import React from 'react';
import RNPPickerSelect from 'react-native-picker-select'
const ParkList2 = () => {
    return (
        <RNPPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                {label: 'Football', value: 'football'},
                {label: 'Football', value: 'football'},
                {label: 'Football', value: 'football'},
            ]}
        />
    );
};
export default ParkList2;