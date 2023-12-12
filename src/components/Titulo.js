import React from "react";
import { StyleSheet,Text, View } from 'react-native';


export default function Titulo({ children }){
    return (<>
        <View style={estilos.titleView}>
            <Text style={estilos.titulo}>{children}</Text>
        </View>
    </>    
    )
}

const estilos = StyleSheet.create({
    titleView:{         
        flex:0,
        alignItems:'center',
        justifyContent: 'center',
        padding: 10,
    },
    titulo:{
        fontSize:18,
        color:"#000AFF",
        fontFamily:"MontserratBold",
    },      
});