
import { styles } from "./tailgating.style.js"; // Importando estilos
import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Tailgating() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1}}>
      <Text style={styles.header}>Tailgating - Carona</Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/watch?v=vOmrAAY-dmM'}} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        O tailgating, também conhecido como 'piggybacking' ou 'carona', é uma técnica de engenharia social onde um 
        invasor se aproveita da confiança ou da distração de um usuário autorizado para obter acesso não autorizado 
        a áreas restritas ou sistemas. Essa prática pode ocorrer tanto fisicamente, como ao seguir de perto um
         funcionário para entrar em um prédio seguro, quanto virtualmente, como ao utilizar um computador deixado 
         logado e desprotegido.
        
        </Text>

        <Text style={styles.text}>
          Quer saber mais? Confira:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://pt.wikipedia.org/wiki/Engenharia_social_(seguran%C3%A7a) ')}>
          Tailgating/Outros conceitos - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.ionos.com/pt-br/digitalguide/servidor/seguranca/tailgating/')}>
          Tailgating  - IONOS
        </Text>
      </View>
    </ScrollView>
  );
}

export default Tailgating;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/

