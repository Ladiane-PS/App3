
import { styles } from "./proteger.style.js"; // Importando estilos
import { View, Text, ScrollView, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview'; // Para exibir o vídeo


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

function Proteger() {
  return (
    <ScrollView style={styles.container}contentContainerStyle={{ flexGrow: 1, paddingBottom: 50}}>
      <Text style={styles.header}>Como se Proteger?</Text>
      <Text style={styles.subHeader}>
        Aprenda a se proteger contra golpes e manipulações digitais!
      </Text>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/watch?v=qqgkhvsyL9Q'}} // URL do vídeo
          allowsFullscreenVideo // Permite modo tela cheia
        />
      </View>

      {/* Seção de Texto Explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        A seguir, algumas recomendações para garantir maior segurança no ambiente digital:
        </Text>

        <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>SPAM </Text>
        consiste em mensagens enviadas massivamente, sem consentimento, com conteúdos apelativos como propagandas exageradas, produtos milagrosos ou notícias sensacionalistas, muitas vezes de remetentes obscuros e com declarações falsas. Esse tipo de mensagem sobrecarrega caixas de entrada, reduz a produtividade, aumenta riscos de segurança com links maliciosos e compromete a privacidade. Para evitar SPAM, recomenda-se não divulgar e-mails indiscriminadamente, proteger dados em redes sociais, marcar mensagens suspeitas como SPAM e verificar a autenticidade de links. Já no caso de SMS, apenas mensagens publicitárias autorizadas pelo consumidor são permitidas, mas os "SMS piratas" persistem, podendo ser denunciados (7726) como forma de mitigar o problema.
        </Text>
        
        <Text style={styles.text}>
        <Text style={{fontWeight: "bold"}}>Phishing </Text>
        - Para identificar um ataque de phishing, desconfie de mensagens com ofertas ou ameaças exageradas, como prêmios milionários ou bloqueio de contas, e verifique se o remetente corresponde à organização mencionada. Observe erros de ortografia, gramática ou formatação, que podem indicar fraude, e nunca clique em links ou anexos suspeitos. Antes de acessar qualquer link, passe o mouse sobre ele para conferir se direciona ao site oficial da instituição.
        </Text>

        <Text style={styles.text}>
        <Text style={{fontWeight: "bold"}}>Senhas </Text>
        - Para proteger suas senhas, é importante evitar o uso de informações pessoais, sequências previsíveis, nomes próprios ou palavras de dicionário, mesmo que modificadas. Utilize senhas com no mínimo oito caracteres, misturando letras maiúsculas, minúsculas, números e caracteres especiais. Uma boa prática é criar senhas a partir de iniciais de frases ou inventar palavras sem sentido, mas fáceis de lembrar. Outra estratégia eficiente é usar uma parte fixa combinada com uma parte variável, personalizada para cada site ou serviço, garantindo mais segurança e praticidade.
        </Text>

        <Text style={styles.text}>
        <Text style={{fontWeight: "bold"}}>Redes Sociais </Text>
         - Para se proteger nas redes sociais, é fundamental adotar boas práticas de segurança, como evitar compartilhar informações pessoais ou se expor além do necessário. Configure suas contas com níveis de privacidade adequados, garantindo que apenas pessoas de confiança tenham acesso às suas publicações. Evite postar fotos ou vídeos que revelam sua localização em tempo real, desative a localização de aplicativos e tenha cuidado com links suspeitos, que podem conter malwares ou direcioná-lo a páginas fraudulentas. Além disso, utilize senhas fortes, atualize-as regularmente e desconfie de contatos ou mensagens de origem desconhecida para evitar golpes e invasões de perfil.
 
        </Text>

          <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>Dispositivos Móveis </Text>
           - Para proteger as redes sociais, é essencial adotar boas práticas de segurança, como evitar compartilhar informações pessoais ou se expor publicamente. Configurar suas contas com níveis de privacidade adequados ajuda a garantir que apenas pessoas com confiança tenham acesso às suas publicações. Também é importante evitar postar fotos ou vídeos que revelem sua localização em tempo real, desativar a localização de aplicativos e tomar cuidado com links suspeitos, que podem conter malwares ou direcioná-lo para páginas fraudulentas. Além disso, o uso de senhas fortes, a atualização regular delas e a desconfiança em relação a contatos ou mensagens de origem desconhecida são medidas cruciais para prevenir golpes e invasões de perfil.
          </Text>

          <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>Comércio Eletrônico </Text>
          Comércio Eletrônico - Para garantir a segurança nas compras online, é essencial adotar boas práticas, como pesquisar a consulta de sites e verificar se são confiáveis ​​antes de realizar transações. Ao fazer compras, é importante optar por sites com conexões seguras (https) e utilizar métodos de pagamento protegidos, como cartões de crédito ou plataformas de pagamento confidenciais. Também é fundamental evitar compras em sites com preços baixos ou com informações duvidosas, além de manter o software do dispositivo sempre atualizado para prevenir vulnerabilidades. Cuidado também com links suspeitos, que podem direcionar sites fraudulentos ou infectados com malwares.
          </Text>

          <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>Cópias Seguras de Dados </Text>
           - A segurança das informações armazenadas é crucial para proteger seus dados pessoais e profissionais. Para garantir cópias seguras, é importante usar métodos de backup confiáveis, como armazenamento em nuvem ou discos rígidos externos criptografados. Ao realizar backups, é fundamental garantir que os dados estejam protegidos com senhas fortes e que o processo seja automatizado para evitar esquecimentos. Além disso, verifique se o sistema de backup utiliza criptografia de ponta a ponta, para que somente você tenha acesso aos dados. Não se esqueça de fazer cópias regulares e manter as versões anteriores dos arquivos para casos de corrupção ou perda de dados. Em situações de backup na nuvem, escolha provedores de serviços com forte política de segurança e sempre revise as permissões de acesso às suas informações.
          </Text>
        
        <Text style={styles.text}>
          Quer saber mais? Confira os seguintes artigos:
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.kaspersky.com.br/resource-center/threats/how-to-avoid-social-engineering-attacks ')}>
          Modos para evitar ataques de engenharia social - Kaspersky.com
        </Text>

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('ttps://repositorium.sdum.uminho.pt/handle/1822/26251')}>
          Artigo sobre Engenharia Social (ou o carneiro que afinal era um lobo) - Repositório.sdum
        </Text>
      </View>
    </ScrollView>
  );
}

export default Proteger;
//{/* Adicionando Imagem Local */}
/*<View style={styles.imageContainer}>
<Image source={require("../../../assets/e.jpg")} style={styles.image} />
</View>*/
