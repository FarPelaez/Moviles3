import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { db } from '../database/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const CrearUsuarios = (props) => {

    const navigation = useNavigation();

    const [user, setUser] = useState({
        nombre: '',
        telefono: '',
        email: ''
    });

    const usuario = (name, value) => {
        setUser({ ...user, [name]: value });
    }

    const guardarNuevoUsuario = async () => {
        if (user.name === '') {
            alert('Por favor, ingresa el nombre de Usuario');
        } else {
            await addDoc(collection(db, 'usuarios'), user);
            props.navigation.navigate('ListaUsuarios');
            alert('Usuario guardado');
        }
    }

    return (
        <ScrollView>
            <View style={estilos.contenedor}>
                <TextInput style={estilos.inputs} placeholder="Escriba su nombre" onChangeText={(valor) => usuario("nombre", valor)} />
            </View>
            <View style={estilos.contenedor}>
                <TextInput style={estilos.inputs} placeholder="Escriba su telefono" keyboardType="numeric" onChangeText={(valor) => usuario("telefono", valor)} />
            </View>
            <View style={estilos.contenedor}>
                <TextInput style={estilos.inputs} placeholder="Escriba su email" onChangeText={(valor) => usuario("email", valor)} />
            </View>
            <View style={estilos.contenedor}>
                <Button title="Guardar Usuario" onPress={guardarNuevoUsuario} />
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    inputs: {
        borderBottomWidth: 1,
        borderColor: "gray",
        flex: 1,
        marginBottom: 10
    },
    contenedor: {
        flex: 1,
        padding: 20
    }
});

export default CrearUsuarios;