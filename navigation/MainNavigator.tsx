import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CrearProductoScreen from '../screens/CrearProductoScreen';
import EliminarProductoScreen from '../screens/EliminarProductoScreen';
import ActualizarProductoScreen from '../screens/ActualizarProductoScreen';
import LeerProductoScreen from '../screens/LeerProductoScreen';
import OperacionProductoScreen from '../screens/OperacionProductoScreen';
import { NavigationContainer } from '@react-navigation/native';
import InicioScreen from '../screens/InicioScreen';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        < Drawer.Navigator initialRouteName="Inicio" >
            <Drawer.Screen name='Inicio' component={InicioScreen}></Drawer.Screen>
            <Drawer.Screen name='Crear' component={CrearProductoScreen}></Drawer.Screen>
            <Drawer.Screen name='Eliminar' component={EliminarProductoScreen}></Drawer.Screen>
            <Drawer.Screen name='Actualizar' component={ActualizarProductoScreen}></Drawer.Screen>
            <Drawer.Screen name='Leer' component={LeerProductoScreen}></Drawer.Screen>
            <Drawer.Screen name='Operacion' component={OperacionProductoScreen}></Drawer.Screen>
        </Drawer.Navigator >


    )
}

export default function MainNavigator() {
    return (

        <NavigationContainer >
            <MyDrawer></MyDrawer>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})