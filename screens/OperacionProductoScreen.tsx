import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';

export default function OperacionProductoScreen() {
  const [datosProductos, setdatosProductos] = useState([]);
  const [totalInventario, settotalInventario] = useState(0);

  function leerProducto() {
    const starCountRef = ref(db, 'productos/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      let listaProductos: any = Object.keys(data).map((nombreProducto) => ({
        nombreProducto,
        ...data[nombreProducto],
      }));

      setdatosProductos(listaProductos);

      let total = 0;
      listaProductos.forEach((producto: any) => {
        const precio = Number(producto.precioProduct) || 0;
        const stock = Number(producto.stockProducto) || 0;
        total += precio * stock;
      });

      settotalInventario(total);
    });
  }

  type Producto = {
    nombreProducto: string;
    nameProduct: string;
    precioProduct: number;
    categoriaProducto: string;
    stockProducto: string;
    descuentoProducto: number;
  };

  useEffect(() => {
    leerProducto();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Operación matemática de productos</Text>

      <Text style={styles.totalLabel}>Total esperado: ${totalInventario.toFixed(2)}</Text>

      <View style={styles.formato}>
        <FlatList
          data={datosProductos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: Producto }) => {
            const precio = Number(item.precioProduct) || 0;
            const stock = Number(item.stockProducto) || 0;
            const descuento = Number(item.descuentoProducto) || 0;

            const valorNormal = precio * stock;
            const valorConDescuento = (precio - descuento) * stock;

            return (
              <View style={styles.itemContainer}>
                <Text style={styles.itemNombre}>{item.nameProduct}</Text>
                <View style={styles.row}>
                  <Text style={styles.label}>Precio unitario:</Text>
                  <Text style={styles.value}>${precio.toFixed(2)}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Stock:</Text>
                  <Text style={styles.value}>{stock}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Valor normal:</Text>
                  <Text style={styles.value}>${valorNormal.toFixed(2)}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Valor con descuento:</Text>
                  <Text style={styles.value}>${valorConDescuento.toFixed(2)}</Text>
                </View>
              </View>
            );
          }}
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
    backgroundColor: '#f0f9f4',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  formato: {
    backgroundColor: '#c8e6c9',
    width: '95%',
    height:"75%",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  itemContainer: {
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  itemNombre: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
  },
  value: {
    fontSize: 14,

    fontWeight: '500',
  },
});
