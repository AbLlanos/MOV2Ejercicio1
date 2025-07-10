import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove } from 'firebase/database'
import { db } from '../firebase/Config'

export default function EliminarProductoScreen({ navigation }: any) {
  const [nombre, setnombre] = useState("")


  function eliminar() {

    if (nombre.trim() === "") {
      Alert.alert("Atención", "Debe llenar el campo con el nombre del producto para eliminar el producto")
      return;
    }

    Alert.alert("Proceso terminado", "El producto ha sido eliminado")

    remove(ref(db, 'productos/' + nombre))

    navigation.navigate("Inicio")
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
      <Text style={styles.titulo}>Eliminar Producto</Text>

      <Text style={styles.subTitulo}>
        Por favor, asegúrese antes de eliminar el producto
      </Text>

      <Text style={styles.label}>Ingrese el nombre del producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del producto"
        value={nombre}
        onChangeText={(texto) => setnombre(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => confirmar()}>
        <Text style={styles.txtBoton}>Eliminar Producto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#e3d9d9',
    alignItems: 'center',
    justifyContent: "center"
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
    color: '#d93025',
  },
  subTitulo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bbb',
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
    marginBottom: 25,
  },
  btn: {
    backgroundColor: '#d93025',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 4,
  },
  txtBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});