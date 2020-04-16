import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import loading from '../../assets/19318-loading-circle.gif';
import { useNavigation } from '@react-navigation/native';

export default function Logout() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(handleLogout, 3000);
        console.log('Logout');
    });

    async function handleLogout() {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            console.log('deu bosta na hora do logout, o erro foi: ' + error);
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={loading} />
            <Text>Fazendo Logout</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
    },
});