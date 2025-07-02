import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function InicioScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gestión de Productos</Text>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Crear')}>
        <Text style={styles.textoBoton}>Crear Producto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Eliminar')}>
        <Text style={styles.textoBoton}>Eliminar Producto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Leer')}>
        <Text style={styles.textoBoton}>Leer Productos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Operacion')}>
        <Text style={styles.textoBoton}>Operación Productos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  boton: {
    backgroundColor: '#4c79ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center'
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16
  }
})
