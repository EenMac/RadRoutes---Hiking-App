import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';

const UserDetails = ({currentUser}) => {
    
    if (currentUser === null){
        return (null)
    }
    
        return (
    
            
            <View >
            <Text style={styles.item}>Name: {currentUser.firstName} {currentUser.lastName}</Text>
            <Text style={styles.item}>Age: {currentUser.age}</Text>
            <Text style={styles.item}>Sex: {currentUser.sex}</Text>
            <Text style={styles.item}>Email: {currentUser.email}</Text>
            <Text style={styles.item}>Known as: {currentUser.alias}</Text>
        </View>
    
    
        )
    
    
      
       
    
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            
            marginHorizontal: 16
        },
        item: {
            backgroundColor: "#5FA777",
            color: '#fff',
            padding: 20,
            marginVertical: 8,
            fontSize: 20
        },
        header: {
            fontSize: 32,
            backgroundColor: "#228B22",
            color: '#fff'
        },
        title: {
            fontSize: 24
        }
        });



export default UserDetails;

