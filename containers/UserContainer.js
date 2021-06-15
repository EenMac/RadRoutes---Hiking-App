import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import DistanceCovered from '../components/userComponents/DistanceCovered';
import RouteList from '../components/userComponents/RouteList';
import Target from '../components/userComponents/Target';
import User from '../components/userComponents/User';


const UserContainer = ({selectedUser, users, setSelectedUser, setCurrentUser, currentUser}) => {
    
    return (
        <View>
            <User selectedUser={selectedUser} users={users} setSelectedUser={setSelectedUser} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
           
            <DistanceCovered   currentUser={currentUser} />
            <RouteList/>
            <Target currentUser={currentUser}/>
            
            
            </View>
            
    );

}

export default UserContainer;