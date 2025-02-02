import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo
import { styles } from "./engenhariasocial.style.js"; // Importando estilos

function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function EngenhariaSocial() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1 ,paddingBottom: 50}}>
      <Text style={styles.header}>Engenharia Social</Text>
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
        Definição de Engenharia Social: A engenharia social pode ser definida como a manipulação de pessoas para revelar
        informações confidenciais ou realizar ações que ameacem a segurança de um sistema de informação.
        
        </Text>
         

        <Text style={styles.text}>
        A engenharia social se baseia na manipulação e persuasão, induzindo a vítima a acreditar em uma falsa identidade ou situação, 
        permitindo que o engenheiro social obtenha informações ou vantagens, com ou sem o uso de tecnologia (MITNICK e SIMON, 2003).
        </Text>
        
        <Text style={styles.text}>
          Quer saber mais? Confira :
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://pt.wikipedia.org/wiki/Engenharia_social_(seguran%C3%A7a)')}>
          Engenharia Social - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.ibm.com/br-pt/topics/social-engineering')}>
          O que e Engenharia Social? - IBM
        </Text>
      </View>
    </ScrollView>
  );
}

export default EngenhariaSocial;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/
