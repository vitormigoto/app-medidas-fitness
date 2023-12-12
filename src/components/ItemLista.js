import React from "react";
import { StyleSheet,Text, View } from 'react-native';


export default function ItemLista({ children }){
    return (<Text style={estilos.itemList}>{children}</Text>    
    )
}

const estilos = StyleSheet.create({
    itemList:{
        flex:0,
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'center',
        padding: 10,
        fontSize:14,
        fontFamily:"MontserratRegular",
    },      
});