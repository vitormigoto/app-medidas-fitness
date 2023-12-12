import { StatusBar, SafeAreaView, View, ScrollView,StyleSheet } from 'react-native';
import Home from './src/telas/Home';
import HeaderBar from './src/components/Header';
import FooterBar from './src/components/Footer';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada] = useFonts({"MontserratRegular": Montserrat_400Regular, "MontserratBold": Montserrat_700Bold});

  if(!fonteCarregada){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <HeaderBar/>
      <ScrollView style={estilos.scroll}>
        <Home/>      
      <FooterBar/>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  scroll:{
      height:"95%",
  }
});
