
import { styles } from "./scareware.style";
import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Scareware() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1, paddingBottom: 50}}>
      <Text style={styles.header}>Scareware - Software assustador</Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/shorts/JiKCho_O3pw ' }} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        scareware (Software assustador, golpe do falso vírus) é um tipo de malware que explora o medo das vítimas 
        para induzi-las a fornecer dados pessoais ou baixar outros softwares específicos. 
        Geralmente, ele se apresenta como um alerta falso, seja informando que o usuário cometeu algum crime, 
        seja como uma notificação falsa de suporte técnico relacionada à presença de malware no dispositivo. 
        O objetivo é manipular as emoções da vítima e levá-la a agir impulsivamente, muitas vezes resultando em 
        danos ou exposição a novos ataques.
        
        </Text>
        
        <Text style={styles.text}>
          Quer saber mais? Confira:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://pt.wikipedia.org/wiki/Scareware')}>
          Scareware - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.fortinet.com/resources/cyberglossary/scareware ')}>
          Scareware - FORTINET
        </Text>
      </View>
    </ScrollView>
  );
}

export default Scareware;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/
