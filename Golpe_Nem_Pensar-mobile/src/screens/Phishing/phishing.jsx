
import { styles } from "./phishing.style.js"; // Importando estilos
import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}
function Phishing() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1, paddingBottom: 50}}>
      <Text style={styles.header}>Phishing - Pescar</Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/watch?v=SwAqZP6xTPo&list=PLfHUtQCif9l0cPHfHVzHZRF0loTWLViIF' }} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        Phishing (pescar) é um tipo de ataque cibernético em que os golpistas enganam as vítimas para que compartilhem informações seguras, 
        como senhas e dados financeiros, ou realizem ações financeiras, como transferências de dinheiro. Esses ataques podem ocorrer por e-mail, 
        telefonemas, mensagens de texto ou até mesmo em redes sociais, com as vítimas sendo causadas pelo acesso a sites fraudulentos ou download de software malicioso.
         Existem várias formas de phishing, incluindo phishing em massa, spear phishing (direcionado a indivíduos específicos), baleia phishing (focado em figuras de alto perfil), 
         vishing (via telefonemas), smishing (via SMS), phishing em mecanismos de pesquisa e pescador phishing (em redes sociais). De acordo com a IBM (2024), o phishing é identificado 
         como o principal vetor de infecção por malware, sendo responsável por 41% dos incidentes. Além disso, é considerado o vetor inicial mais comum em ataques que resultam em evidências de dados mais custosos.
        
        </Text> 
        <Text style={styles.text}>
          Quer saber mais? Confira:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://en.wikipedia.org/wiki/Phishing')}>
          Phishing - Wikipédia
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.welivesecurity.com/pt/phishing/')}>
          Phishing - welivesecurity
        </Text>
      </View>
    </ScrollView>
  );
}

export default Phishing;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/
