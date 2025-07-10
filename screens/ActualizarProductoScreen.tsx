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
      <Text style={styles.titulo}>Actualizar producto</Text>

      <Text style={styles.subTitulo}>
        Complete la información solo si es necesario
      </Text>

      <Text style={styles.label}>Nombre del producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del producto"
        value={nombre}
        onChangeText={(texto) => setnombre(texto)}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Precio del producto</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={precio.toString()}
        placeholder="Ingrese el precio del producto"
        onChangeText={(texto) => setprecio(+texto)}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Stock del producto</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={stock}
        placeholder="Ingrese el stock del producto"
        onChangeText={(texto) => setstock(texto)}
        placeholderTextColor="#999"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>
          La información cambiada ha sido verificada
        </Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#04f6c6' }}
          thumbColor={terminos ? '#00bfa5' : '#f4f3f4'}
          value={terminos}
          onValueChange={() => setterminos(!terminos)}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => editar()}>
        <Text style={styles.txtBoton}>Actualizar Producto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#f9fcfc',
    alignItems: 'center',
    justifyContent: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subTitulo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a7d8d6',
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#e6f3f2',
    fontSize: 16,
    color: '#004d40',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  btn: {
    backgroundColor: '#8cdecf',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 14,
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  txtBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});