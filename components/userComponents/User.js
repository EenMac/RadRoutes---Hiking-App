import React from 'react';
import {StyleSheet, View, Text, TextComponent, Image} from 'react-native';


const User = () => {

    const styles = StyleSheet.create({

    logo: {
        width: 66,
        height: 58,
    },
    });


    return(
        <View>
                <Text>This is User Profile component</Text>

                <Image
                    style={styles.logo}
                    source={{
                    uri: 'https://www.balticcouncil.pl/images/products/macibas-arzemes/valodu-nometnes-kursi-7-18-g-v-skoleniem---individualie-braucieni/anglu-valoda-asv/boston/th/700x700_6/1.jpg',
                    }}
                />
        </View>
    )
}

export default User;