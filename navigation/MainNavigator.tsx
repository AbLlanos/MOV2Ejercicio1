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
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        < Drawer.Navigator initialRouteName="Inicio" >
            <Drawer.Screen
                name="Inicio"
                component={InicioScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={30} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Crear"
                component={CrearProductoScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" color={color} size={30} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Eliminar"
                component={EliminarProductoScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="trash-outline" color={color} size={30} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Actualizar"
                component={ActualizarProductoScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="pencil-outline" color={color} size={30} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Leer"
                component={LeerProductoScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="document-text-outline" color={color} size={30} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Operacion"
                component={OperacionProductoScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" color={color} size={30} />
                    ),
                }}
            />
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