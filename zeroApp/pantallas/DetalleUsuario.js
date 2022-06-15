import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, Button, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import { db } from "../database/firebase";
import { deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";


const DetalleUsuario = (props) => {
    const [user, setUser] = useState({
        id: '',
        nombre: '',
        telefono: '',
        email: ''
    })

    const [loading, setLoading] = useState(true)

    const getUserById = async (id) => {
        const dbref = doc(db, 'usuarios', id);
        const user = (await getDoc(dbref)).data()
        setUser({
            ...user,
            id: doc.id,
        });
        setLoading(false)
    }


    useEffect(() => {
        getUserById(props.route.params.userId);
    }, [])

    const usuario = (name, value) => {
        setUser({ ...user, [name]: value });
    }

    const onDelete = async () => {
        const docRef = doc(db, 'usuarios', props.route.params.userId);
        await deleteDoc(docRef);
        props.navigation.navigate('ListaUsuarios')
    }

    const update = async () => {
        const docRef = doc(db, 'usuarios', props.route.params.userId);
        await updateDoc(docRef, {
            nombre: user.nombre,
            telefono: user.telefono,
            email: user.email,
        });
        props.navigation.navigate('ListaUsuarios')
    }

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="green" />
            </View>
        )
    }

    return (
        <ScrollView>
            <View>
                <TextInput placeholder="Escriba su nombre"
                    value={user.nombre}
                    onChangeText={(valor) => usuario("nombre", valor)}></TextInput>
            </View>
            <View>
                <TextInput placeholder="Escriba su Telefono"
                    keyboardType="numeric"
                    value={user.telefono}
                    onChangeText={(valor) => usuario("telefono", valor)}></TextInput>
            </View>
            <View>
                <TextInput placeholder="Escriba su email"
                    keyboardType={"email-address"}
                    value={user.email}
                    onChangeText={(valor) => usuario("email", valor)}></TextInput>
            </View>
            <View>
                <Button title="Actualizar" onPress={update}></Button>
                <Button title="Eliminar" onPress={onDelete}></Button>
            </View>

        </ScrollView>
    )
}

export default DetalleUsuario;