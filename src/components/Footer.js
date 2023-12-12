import React from "react";
import { StyleSheet,Text, View } from 'react-native';


export default function FooterBar(){
    return (<>
        <View style={estilos.footerBar}>
            <Text style={estilos.texto}>Desenvolvido por Vitor Migoto - 2023</Text>
        </View>
    </>    
    )
}

const estilos = StyleSheet.create({
    footerBar:{         
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal: 10,
        height:40,
        borderTopWidth:1,
        borderColor:"#D2D2D2",
        marginHorizontal:10,
    },    
        texto:{
            fontSize:10,
            textAlign: "center",
            fontFamily:"MontserratBold",
        },
});

