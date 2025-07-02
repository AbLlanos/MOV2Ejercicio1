import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';

export default function OperacionProductoScreen() {
  const [datosProductos, setdatosProductos] = useState([]);
  const [nombre, setnombre] = useState("");

  const [totalInventario, settotalInventario] = useState(0);


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
  }

  useEffect(() => {
    leerProducto();
  }, [])





  return (
    <View style={styles.container}>


      <Text style={styles.titulo}>Operación matemática de productos</Text>


      <Text style={styles.label}>El total esperado es: {totalInventario}</Text>

      <View style={styles.formato}>
        <FlatList
          data={datosProductos}
          renderItem={({ item }: { item: Producto }) => (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text>Nombre: {item.nameProduct}</Text>
              <Text>Precio: ${item.precioProduct}</Text>
              <Text>Stock: {item.stockProducto}</Text>
            </View>
          )}
        />
      </View>


    </View >


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
    textAlign: 'center',
  },
  subTitulo: {
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#efc762",
    padding: 10,
    borderRadius: 10,
  },
  txtBoton: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  formato: {
    backgroundColor: "#acecb1",
    margin: 5,
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 130,
  }


})