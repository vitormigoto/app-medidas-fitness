import React from "react";
import { StyleSheet,Text, View } from 'react-native';


export default function Texto({ children }){
    return (<>
        <View style={estilos.textView}>
            <Text style={estilos.texto}>{children}</Text>
        </View>
    </>    
    )
}

const estilos = StyleSheet.create({
    textView:{         
        flex:0,
        alignItems:'center',
        justifyContent: 'center',
        padding: 10,
    },
    texto:{
        fontSize:14,
        fontFamily:"MontserratRegular",
        textAlign:'center',
        lineHeight:25,
    },      
});