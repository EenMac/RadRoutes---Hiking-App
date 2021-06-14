import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import DistanceCovered from '../components/userComponents/DistanceCovered';
import RouteList from '../components/userComponents/RouteList';
import Target from '../components/userComponents/Target';
import User from '../components/userComponents/User';

const UserContainer = () => {
    
    return (
        <View>
            <DistanceCovered/>
            <RouteList/>
            <Target/>
            <User />
            
            </View>
            
    );

}

export default UserContainer;