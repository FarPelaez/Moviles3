import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Importar librerías de navegación
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Importar pantallas
import CrearUsuarios from './pantallas/CrearUsuarios';
import ListaUsuarios from './pantallas/ListaUsuarios';
import DetalleUsuario from './pantallas/DetalleUsuario';

// Variable de navegación
const Pantallas = createNativeStackNavigator();

// Componente para las Pantallas
function MisPantallas() {
  return (
    <Pantallas.Navigator>
      <Pantallas.Screen name="ListaUsuarios" component={ListaUsuarios} ></Pantallas.Screen>
      <Pantallas.Screen name="CrearUsuarios" component={CrearUsuarios} ></Pantallas.Screen>
      <Pantallas.Screen name="DetalleUsuario" component={DetalleUsuario} ></Pantallas.Screen>
    </Pantallas.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MisPantallas />
    </NavigationContainer>
  );
}

export default App;

