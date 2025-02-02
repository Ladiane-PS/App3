
import { styles } from "./watering.style.js"; // Importando estilos
import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Watering () {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1, paddingBottom: 50}}>
      <Text style={styles.header}>watering hole - poço de água </Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/watch?v=m-c11Y29dVs ' }} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        Ataque de watering hole (poço de água) (Ataque direcionado a um site, infecção de site) Inspirado pela 
        expressão "envenenar o poço", o ataque de watering hole ocorre quando hackers inserem código malicioso 
        em um site legítimo que é regularmente acessado por vítimas em potencial. Esse tipo de ataque pode resultar
         do roubo de credenciais até uma instalação não intencional de ransomware (software malicioso)nos dispositivos 
         dos usuários.

        
        </Text>
         
        
        <Text style={styles.text}>
          Quer saber mais? Confira:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://en.wikipedia.org/wiki/Watering_hole_attack ')}>
          Watering hole - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://minutodaseguranca.blog.br/o-que-e-um-ataque-de-watering-hole/')}>
          Watering hole  - Minuto da Segurança
        </Text>
      </View>
    </ScrollView>
  );
}

export default Watering;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/
