import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o víde
import {styles} from './baiting.style.js';


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Baiting() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1, paddingBottom: 50}}>
      <Text style={styles.header}>Baiting - Isca</Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/watch?v=tlpvbXirkoQ' }} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
         Baiting (isca)  é uma técnica de engenharia social onde os atacantes utilizam uma "oferta atraente"
         para induzir as vítimas a revelar informações prejudiciais ou a baixar softwares maliciosos. 
         Esse tipo de ataque pode ser baseado em promessas de vantagens, como ofertas tentadoras de produtos 
         ou serviços gratuitos. Um exemplo clássico dessa técnica é o golpe do "príncipe nigeriano", mas as 
         abordagens mais modernas incluem a distribuição de jogos, músicas ou softwares gratuitos que, na verdade, 
         estão infectados com malware. Além disso, algumas formas de isca são mais sutis, como deixar dispositivos,
         como pendrives, infectados com código malicioso em locais públicos, esperando que as vítimas, atraídas pela "oferta", os peguem e os conectem aos seus dispositivos.
        
        </Text>
        
        <Text style={styles.text}>
          Quer saber mais? Confira:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://pt.wikipedia.org/wiki/Engenharia_social_(seguran%C3%A7a)')}>
         Baiting/outros conceitos - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://forum.casadodesenvolvedor.com.br/topic/47082-baiting-em-ciberseguran%C3%A7a-como-reconhecer-e-evitar-armadilhas-digitais/')}>
          Baiting - Casa do Desenvolvedor
        </Text>
      </View>
    </ScrollView>
  );
}

export default Baiting;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/