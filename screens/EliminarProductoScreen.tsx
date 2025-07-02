import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove } from 'firebase/database'
import { db } from '../firebase/Config'

export default function EliminarProductoScreen() {
  const [nombre, setnombre] = useState("")


  function eliminar() {

    if (nombre.trim() === "") {
      Alert.alert("Atención", "Debe llenar el campo con el nombre del producto para eliminar el producto")
      return;
    }

    Alert.alert("Proceso terminado", "El producto ha sido eliminado")

    remove(ref(db, 'productos/' + nombre))
  };




  function confirmar() {

    Alert.alert("Confirmcion", "Esta seguro de eliminar el produtco?", [
      {
        text: "Eliminar",
        onPress: () => eliminar()
      },
      {
        text: "Cancelar"
      }
    ])
  }


  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Eliminar producto</Text>

      <Text style={styles.subTitulo}>Debe estar seguro anter de eliminar el producto</Text>

      <Text style={styles.label}>Ingrese el nombre del producto</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese el nombre del producto'
        value={nombre}
        onChangeText={(texto) => setnombre(texto)}
      ></TextInput>


      <TouchableOpacity style={styles.btn} onPress={() => confirmar()}>
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
    backgroundColor: "#fb5b5b",
    padding: 10,
    borderRadius: 10,
  },
  txtBoton: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  }


})