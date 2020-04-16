import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.openDrawer();
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