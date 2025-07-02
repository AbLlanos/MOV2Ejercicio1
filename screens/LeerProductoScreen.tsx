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
          renderItem={({ item }: { item: Producto }) => (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text>Nombre: {item.nameProduct}</Text>
              <Text>Precio: ${item.precioProduct}</Text>
              <Text>Categoría: {item.categoriaProducto}</Text>
              <Text>Stock: {item.stockProducto}</Text>
              <Text>Descuento: ${item.descuentoProducto}</Text>
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
  formato:{
    backgroundColor:"#ffd875",
    margin:5,
    width:"90%",
    alignItems:"center",
    borderRadius:10,
    marginBottom:130,
  }


})