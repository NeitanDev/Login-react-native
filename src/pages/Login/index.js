import React, { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Login</Text>
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
        // backgroundColor: '#333'
    },
    input: {
        borderWidth: 1,
        width: '90%',
        height: 50,
        marginBottom: 15,
        paddingLeft: 8,
        borderRadius: 8,
    },
    title: {
        fontSize: 56,
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#009933',
        width: '90%',
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 36,
        color: '#fff',
    }
});