import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { db } from '../firebase/Config'
import { Switch } from 'react-native-paper';

export default function CrearProductoScreen({navigation}: any) {

    const [nombre, setnombre] = useState("")
    const [precio, setprecio] = useState(0)
    const [categoria, setcategoria] = useState("")
    const [stock, setstock] = useState("")

    const [terminos, setterminos] = useState(false)

    function guardarProducto() {

        if (nombre.trim() === "" || categoria.trim() === "" || stock.trim() === "" || precio <= 0) {
            Alert.alert("Debe completar todos los campos", "Recuerde poner toda la información del producto y un precio mayor a 0 dolares");
            return;
        }

        if (!terminos) {
            Alert.alert("Incompleto", "Debe aceptar los verificación sonre la información ingresada");
            return;
        }

        const precioConDescuento = precio - (precio * 0.10);

        set(ref(db, 'productos/' + nombre), {
            nameProduct: nombre,
            precioProduct: precio,
            categoriaProducto: categoria,
            stockProducto: stock,
            descuentoProducto: precioConDescuento,
        });

        limpiarCampos();

        navigation.navigate("Inicio")
        Alert.alert("Felicidades el producto ha sido registrado", `El precio del producto con un 10% de descuento es: ${precioConDescuento}`);

    }


    function limpiarCampos() {
        setnombre("");
        setprecio(0);
        setcategoria("");
        setstock("");
        setterminos(false);
    }



    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Crear Producto</Text>

            <Text style={styles.subTitulo}>
                Debe completar toda la información solicitada
            </Text>

            <Text style={styles.label}>Ingrese el nombre del producto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el nombre del producto"
                value={nombre}
                onChangeText={(texto) => setnombre(texto)}
            />

            <Text style={styles.label}>Ingrese el precio del producto</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={precio.toString()}
                placeholder="Ingrese el precio del producto"
                onChangeText={(texto) => setprecio(+texto)}
            />

            <Text style={styles.label}>Ingrese la categoría del producto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese la categoría del producto"
                value={categoria}
                onChangeText={(texto) => setcategoria(texto)}
            />

            <Text style={styles.label}>Ingrese el stock del producto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el stock del producto"
                keyboardType="numeric"
                value={stock}
                onChangeText={(texto) => setstock(texto)}
            />

            <View style={styles.terminosContainer}>
                <Switch
                    value={terminos}
                    onValueChange={() => setterminos(!terminos)}
                />
                <Text style={styles.labelTerminos}>
                    La información ingresada debe ser verdadera
                </Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => guardarProducto()}>
                <Text style={styles.txtBoton}>Crear Producto</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#d2c8df',
    },
    titulo: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 12,
        color: '#3a3a3a',
    },
    subTitulo: {
        fontSize: 16,
        marginBottom: 25,
        textAlign: 'center',
        color: '#555',
        paddingHorizontal: 10,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 14,
        marginBottom: 6,
        color: '#333',
        fontWeight: '600',
    },
    input: {
        height: 45,
        width: '100%',
        borderRadius: 8,
        borderColor: '#bbb',
        borderWidth: 1,
        marginBottom: 18,
        paddingHorizontal: 12,
        fontSize: 15,
        backgroundColor: '#fff',
    },
    terminosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
    },
    labelTerminos: {
        marginLeft: 12,
        fontSize: 14,
        color: '#555',
        flexShrink: 1,
    },
    btn: {
        width: '100%',
        backgroundColor: '#7f5ca3',
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 3,
    },
    txtBoton: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
        textAlign: 'center',
    },
});