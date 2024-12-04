import { View, Text, ScrollView, Linking } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo
import { styles } from "./senha.style.js"; // Importando estilos

function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Senha() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Protega Sua Senha !</Text>
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
          A engenharia social é uma técnica utilizada para manipular as pessoas e induzi-las a revelar informações confidenciais. 
          Ela explora a confiança, curiosidade ou medo das vítimas para obter dados sensíveis.
        </Text>

        <Text style={styles.text}>
          Quer saber mais? Confira os seguintes artigos:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://pt.wikipedia.org/wiki/Engenharia_social_(seguran%C3%A7a)')}>
          Engenharia Social - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.cert.br/artigos/engenharia-social/')}>
          Artigo sobre Engenharia Social - CERT.br
        </Text>
      </View>
    </ScrollView>
  );
}

export default Senha;
