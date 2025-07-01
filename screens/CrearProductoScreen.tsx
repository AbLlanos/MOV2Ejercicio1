import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function CrearProductoScreen() {

    const [nombre, setnombre] = useState("")
    const [precio, setprecio] = useState("")
    const [categoria, setcategoria] = useState(0)
    const [stock, setstock] = useState("")

    return (
        <View>
            <Text>CrearProductoScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})