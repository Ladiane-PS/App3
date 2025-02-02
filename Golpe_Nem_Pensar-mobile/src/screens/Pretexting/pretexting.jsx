
import { styles } from "./pretexting.style.js"; // Importando estilos
import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Pretexting() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1, paddingBottom: 50}}>
      <Text style={styles.header}>Pretexting - Pretexto</Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/shorts/BW5H_XgZWYU ' }} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        Pretexting (pretexto) é uma técnica de engenharia social onde o atacante cria uma situação falsa para 
        enganar a vítima e se apresenta como a pessoa certa para resolvê-la. No contexto digital, 
        o pretexto geralmente ocorre por meio de canais como e-mails, telefonemas, mensagens de texto ou redes 
        sociais. Em muitos casos, o golpista afirma que a vítima foi vítima de uma violação de segurança e se 
        oferece para resolver o problema, desde que a vítima forneça informações sensíveis ou concedidas ao 
        computador ou dispositivo. Vale destacar que, na maioria das vezes, ataques de engenharia social envolvem 
        alguma forma de pretexto, sendo essa técnica um dos pilares dessa abordagem.

        </Text>
        
        <Text style={styles.text}>
          Quer saber mais? Confira:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://en.wikipedia.org/wiki/Pretexting ')}>
          Pretexting - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.serasaexperian.com.br/conteudos/prevencao-a-fraude/como-se-proteger-de-fraude-pretexting/')}>
          Pretexting - Serasa experian
        </Text>
      </View>
    </ScrollView>
  );
}

export default Pretexting;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/
