import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Target = ({currentUser}) => {
    
    if (currentUser === null){
        return (null)
    }
    
        return (
    
            
            <View>
                <Text style={styles.item}>Monthly Goal: {currentUser.distanceTarget}km</Text>
                
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



export default Target;