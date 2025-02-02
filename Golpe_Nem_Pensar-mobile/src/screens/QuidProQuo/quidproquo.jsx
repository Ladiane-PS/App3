
import { styles } from "./quidproquo.style.js"; // Importando estilos
import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function QuidProQuo() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1, paddingBottom: 50}}>
      <Text style={styles.header}>Quid Pro Quob - Troca</Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/watch?v=oErJwP0xYjM' }} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        Quid pro quo (troca,barganha) envolve hackers oferecendo benefícios ou serviços atrativos, 
        como prêmios ou acesso a conteúdos exclusivos, em troca de informações sensíveis da vítima. 
        Isso pode ocorrer, por exemplo, em e-mails fraudulentos que oferecem prêmios por participação em 
        concursos falsos ou promessas de benefícios em programas de fidelidade, como "parabéns, você ganhou um 
        presente por ser um cliente fiel". O objetivo é enganar a vítima para fornecer dados proporcionais, 
        como senhas ou informações financeiras, acreditando estar recebendo algo valioso em troca.
        
        </Text>
        
        <Text style={styles.text}>
          Quer saber mais? Confira:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://pt.wikipedia.org/wiki/Quid_pro_quo -')}>
          Quid Pro Quo - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://blog.mailfence.com/pt/engenharia-social-ataques-quiproquo/ ')}>
           Quid Pro Quo - Mailfence
        </Text>
      </View>
    </ScrollView>
  );
}

export default QuidProQuo;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/
