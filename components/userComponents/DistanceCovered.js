import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';
import React from 'react';

const DistanceCovered = ({currentUser}) => {

    




if (currentUser === null){
    return (null)
}

    return (

        
        <View>
            <Text>Name: {currentUser.firstName} {currentUser.lastName}</Text>
            <Text>Age: {currentUser.age}</Text>
            <Text>Sex: {currentUser.sex}</Text>
        </View>


    )


  
   

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#5FA777",
        color: '#fff',
        padding: 20,
        marginVertical: 8
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

export default DistanceCovered;