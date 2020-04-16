import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import loading from '../../assets/19318-loading-circle.gif';

export default function Logout() {
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