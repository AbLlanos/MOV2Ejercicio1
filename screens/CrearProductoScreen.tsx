import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { db } from '../firebase/Config'
import { Switch } from 'react-native-paper';

export default function CrearProductoScreen() {

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

            <Text style={styles.subTitulo}>Debe completar toda la información solicitada</Text>

            <Text style={styles.label}>Ingrese el nombre del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingrese el nombre del producto'
                value={nombre}
                onChangeText={(texto) => setnombre(texto)}
            ></TextInput>

            <Text style={styles.label}>Ingrese el precio del producto</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={precio.toString()}
                placeholder='Ingrese el precio del producto'
                onChangeText={(texto) => setprecio(+texto)}
            ></TextInput>

            <Text style={styles.label}>Ingrese la catergoría del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingrese la categoría del producto'
                value={categoria}
                onChangeText={(texto) => setcategoria(texto)}
            ></TextInput>

            <Text style={styles.label}>Ingrese el stock del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingrese el stock del producto'
                keyboardType='numeric'
                value={stock}
                onChangeText={(texto) => setstock(texto)}
            ></TextInput>


            <Text style={styles.label}>La información ingresada debe ser verdadera</Text>
            <Switch value={terminos} onValueChange={() => setterminos(!terminos)}></Switch>

            <TouchableOpacity style={styles.btn} onPress={() => guardarProducto()}>
                <Text style={styles.txtBoton}>Crear Producto</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    input: {
        height: 40,
        width: '90%',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 12,
        marginVertical: 10,
    },
    titulo: {
        fontSize: 20,
        marginVertical: 10,
    },
    subTitulo: {
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'center',
    },
    btn: {
        marginTop: 10,
        backgroundColor: "#bb4dff",
        padding: 10,
        borderRadius: 10,
    },
    txtBoton: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    }


})