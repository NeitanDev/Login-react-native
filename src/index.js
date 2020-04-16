import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Constants from 'expo-constants';
import Routes from './routes';

export default function src() {
    return (
        <View style={styles.container}>
            <Routes />
            {/* <Text>Sounou sounou</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: '#333',
    }
});