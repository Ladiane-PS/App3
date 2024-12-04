import { View, Text, ScrollView, Linking } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo
import { styles } from "./phishing.style.js"; // Importando estilos

function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Phishing() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Phishing</Text>
      <Text style={styles.subHeader}>
      Entenda como se proteger contra ataques de phishing!
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
        Phishing é uma técnica utilizada para enganar pessoas e fazê-las revelar informações confidenciais, como senhas e dados bancários. 
        Os ataques geralmente são feitos por e-mails ou mensagens que parecem legítimas.
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

export default Phishing;
