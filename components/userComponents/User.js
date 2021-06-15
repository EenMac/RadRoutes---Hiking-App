import React from 'react';
import {StyleSheet, View, Text, TextComponent, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const User = ({users, onUserChange, selectedUser}) => {

    const listOfUserPickerItems = users.map((user, id) => {
        return (
            {label: user.alias, value: user.alias, key: id}
            
        );
    });

    return(
        <View>
                <RNPickerSelect
            onUserChange={onUserChange}
            selectedUser={selectedUser}
            items={
                listOfUserPickerItems
            }
        />
        </View>
    )
}

export default User;