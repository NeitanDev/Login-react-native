import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation();

    async function getUserId() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                // We have data!!
                console.log(value);
            } else if (value == null) {
                console.log('valor retornou nulo');
            }
        } catch (error) {
            console.log('Deu bosta na hora de salvar, aconteceu isso: ' + error);
        }
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.openDrawer();
                    getUserId();
                }}
            >
                <Text>Home</Text>
            </TouchableOpacity>
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
});