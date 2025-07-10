import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function InicioScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gestión de Productos</Text>

      <Image style={styles.img} source={{ uri: "https://cdn-icons-png.flaticon.com/128/7325/7325306.png" }}></Image>

      <TouchableOpacity style={styles.boton1} onPress={() => navigation.navigate('Crear')}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.textoBoton}>Crear Producto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton2} onPress={() => navigation.navigate('Eliminar')}>
        <Ionicons name="trash-outline" size={24} color="#fff" />
        <Text style={styles.textoBoton}>Eliminar Producto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton3} onPress={() => navigation.navigate('Leer')}>
        <Ionicons name="document-text-outline" size={24} color="#fff" />
        <Text style={styles.textoBoton}>Leer Productos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton4} onPress={() => navigation.navigate('Operacion')}>
        <Ionicons name="settings-outline" size={24} color="#fff" />
        <Text style={styles.textoBoton}>Operación de Productos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1dae1',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  boton1: {
    backgroundColor: '#946bc2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
    boton2: {
    backgroundColor: '#ce6464',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
    boton3: {
    backgroundColor: '#d3ac5f',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
    boton4: {
    backgroundColor: '#86c26b',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    resizeMode: 'cover',
    marginVertical:10,
  }
})
