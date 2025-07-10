import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';

export default function LeerProductoScreen() {

  const [datosProductos, setdatosProductos] = useState([]);
  const [nombre, setnombre] = useState("");


  function leerProducto() {
    const starCountRef = ref(db, 'productos/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      let listaProductos: any = Object.keys(data).map((nombreProducto) => ({
        nombreProducto,
        ...data[nombreProducto]
      }));
      console.log(data);
      setdatosProductos(listaProductos);
      console.log(listaProductos);

    });


  }

  type Producto = {
    nombreProducto: string;
    nameProduct: string;
    precioProduct: number;
    categoriaProducto: string;
    stockProducto: string;
    descuentoProducto: number;
  }

  useEffect(() => {
    leerProducto();
  }, [])





  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de productos</Text>

      <View style={styles.formato}>
        <FlatList
          data={datosProductos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: Producto }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemNombre}>{item.nameProduct}</Text>
              <Text style={styles.itemText}>
                <Text style={styles.itemLabel}>Precio:</Text> ${item.precioProduct}
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.itemLabel}>Categoría:</Text> {item.categoriaProducto}
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.itemLabel}>Stock:</Text> {item.stockProducto}
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.itemLabel}>Descuento:</Text> ${item.descuentoProducto}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    padding: 25,
    backgroundColor: '#f5eddb',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  formato: {
    backgroundColor: '#ffd875',
    width: '95%',
    height:"90%",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#fff5cc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#a37f00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  itemNombre: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  itemLabel: {
    fontWeight: '700',
  },
  itemText: {
    fontSize: 14,
    marginBottom: 5,
  },
});