import React, { Component, useEffect } from "react";
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';


class HeaderBar extends Component {  

    render(){
        return (<>
            <View style={estilos.headerBar}>
                <View style={estilos.leftLink}>
                    <TouchableOpacity onPress={() => alert('1')} underlayColor="white">
                        <Text style={estilos.titulo}>Medidas Fitness</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.rightLinks}>
                    <TouchableOpacity onPress={() => alert('2')} underlayColor="white">
                        <Text style={estilos.texto}>Criar Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('3')} underlayColor="white">
                        <Text style={estilos.texto}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>    
        )
    }
}

export default HeaderBar;

const estilos = StyleSheet.create({
    headerBar:{         
        flexDirection:"row",
        justifyContent:"flex-start",
        alignContent:"space-between",
        paddingHorizontal: 10,
        height:40
    },
        leftLink:{
            flex:1,
            flexDirection:"row",
            alignItems:"center",
        },    
            titulo:{
                fontSize:20,
                color:"#000AFF",
                fontFamily:"MontserratBold",
            },
        rightLinks:{
            flex:1,
            flexDirection:"row",
            justifyContent:"flex-end",  
            alignItems:"center",    
        },
            texto:{
                fontSize:16,
                color:"#000AFF",
                paddingHorizontal:5,
                fontFamily:"MontserratRegular",
            },
});

