import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ref, update } from 'firebase/database'
import { db } from '../firebase/Config'
import { TextInput } from 'react-native-gesture-handler'
import { Switch } from 'react-native-paper'

export default function ActualizarProductoScreen() {

  const [nombre, setnombre] = useState("")
  const [precio, setprecio] = useState(0)
  const [stock, setstock] = useState("")

  const [terminos, setterminos] = useState(false)


  function editar() {

    if (nombre.trim() === "") {
      Alert.alert("Atención", "Debe llenar el campo con el nombre del producto para ralizar los cambios")
      return;
    }

    if (!terminos) {
      Alert.alert("Atención", "Debe aceptar para realizar el cambio")
      return;
    }

    Alert.alert("Felicidades", "El producto ha sido modificado") 

    let precioConDescuento = precio - (precio * 0.10);


    update(ref(db, 'productos/' + nombre), {
      nameProduct: nombre,
      precioProduct: precio,
      stockProducto: stock,
      descuentoProducto: precioConDescuento,
    });
  }

  return (

        <View style={styles.container}>
      <Text style={styles.titulo}>Actualzar producto</Text>

      <Text style={styles.subTitulo}>Debe completar toda la información solicitada solo si es necesario</Text>

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

      <Text style={styles.label}>Ingrese el stock del producto</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese el stock del producto'
        keyboardType='numeric'
        value={stock}
        onChangeText={(texto) => setstock(texto)}
      ></TextInput>


      <Text style={styles.label}>La información cambiada ha sido verificada</Text>
      <Switch value={terminos} onValueChange={() => setterminos(!terminos)}></Switch>

      <TouchableOpacity style={styles.btn} onPress={() => editar()}>
        <Text style={styles.txtBoton}>Actualizar Producto</Text>

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
    backgroundColor: "#04f6c6",
    padding: 10,
    borderRadius: 10,
  },
  txtBoton: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  }


})