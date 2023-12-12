import React from "react";
import { StyleSheet,Text, Image } from 'react-native';
import Titulo from '../components/Titulo';
import Texto from '../components/Texto';
import ItemLista from '../components/ItemLista';
import Banner from '../../assets/banner_fitness.png';

export default function Home(){
    return (<>
        <Image source={Banner} style={estilos.topo}/>
        <Titulo>Funcionalidades</Titulo>
            <ItemLista>Cadastro de Alunos</ItemLista>
            <ItemLista>Cadastro de Personal Trainner</ItemLista>
            <ItemLista>Registro de Medidas</ItemLista>
            <ItemLista>Acompanhamento das Medidas</ItemLista>
        <Titulo>Preço</Titulo>
        <Texto>
        Este sistema tem todas as funcionalidades de uso gratuito por ser ferramenta de aprendizado e aperfeiçoamento e por não possuir nenhum tipo de suporte e custo para manutenção.
        </Texto>
    </>    
    )
}

const estilos = StyleSheet.create({
    topo:{
        width:"100%",
    }
});


