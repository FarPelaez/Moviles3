import react, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity } from "react-native";
import { db } from '../database/firebase';
import { collection, onSnapshot, query } from "firebase/firestore";
import { ListItem } from "react-native-elements"

const ListaUsuarios = (props) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db, 'usuarios')
        const q = query(collectionRef)

        const unsuscribe = onSnapshot(q, querySnapshot => {
            setUsers(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    nombre: doc.data().nombre,
                    telefono: doc.data().telefono,
                    email: doc.data().email,
                })
                )
            )
        })
        return unsuscribe;
    }, [])
    return (
        <>
            <ScrollView >
                <View >
                    <Button title="Crear Usuario" onPress={() => props.navigation.navigate('CrearUsuarios')} />
                </View>
                {
                    users.map(user => {
                        return (
                            <ListItem key={user.id} bottomDivider onPress={() => props.navigation.navigate('DetalleUsuario', {
                                userId: user.id
                            })}>
                                <ListItem.Content >
                                    <ListItem.Title >{user.nombre}</ListItem.Title>
                                    <ListItem.Subtitle >{user.email}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        )
                    })
                }
            </ScrollView>
        </>
    )
}


export default ListaUsuarios;