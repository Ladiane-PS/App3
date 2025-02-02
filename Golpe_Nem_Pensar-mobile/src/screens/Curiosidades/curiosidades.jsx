import React from 'react';
import { View, Text, ScrollView, Linking} from 'react-native';
import { styles } from './curiosidades.style.js';


function abrirLink(url) {
  Linking.openURL(url); // Função para abrir links externos
}

{/*permiti rola a tela  */}
export default function Curiosidades() {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Text style={styles.title}>Curiosidades ???????</Text>

     
      
      <Text style={styles.content}>
        Brasil é o 4º país da América Latina com mais ameaças digitais no 1º semestre de 2024, diz pesquisa{"\n\n"}

        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.cnnbrasil.com.br/economia/macroeconomia/brasil-e-o-4o-pais-da-america-latina-com-mais-ameacas-digitais-no-primeiro-semestre-de-2024-diz-pesquisa/#:~:text=Lideram%20o%20ranking%20pa%C3%ADses%20como,ocorr%C3%AAncias%20(7%2C84%25).')}>
          CN Brasil
        </Text>
      </Text>
      

    
      <Text style={styles.content}>
         O Brasil está entre os países onde as pessoas passam mais tempo online: o tempo médio diário chega a 5,3 horas. No ranking de um levantamento da Data.AI, o país está em segundo lugar, só atrás da Indonésia, que chega a 5,7 horas de consumo diário. .{"\n\n"}
        
        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://gizmodo.uol.com.br/brasileiro-fica-conectado-mais-de-5h-por-dia-e-e-o-2o-no-ranking-global/#:~:text=O%20Brasil%20est%C3%A1%20entre%20os,saltou%20para%205%2C2%20horas.&text=Ar%C3%A1bia%20Saudita%20e%20Singapura%20tamb%C3%A9m,lugar%2C%20com%203%2C6h.&text=Segundo%20o%20estudo%2C%20o%20total,China%E2%80%9D%2C%20diz%20o%20relat%C3%B3rio. ')}>
          Gizmodo.uol
        </Text>
      </Text>

     

      <Text style={styles.content}>
         Você sabia que 98,5% dos usuários de internet entre 16 e 64 anos no Brasil usam seus celulares para navegar na web? Isso significa que,
        para a grande maioria dos brasileiros, o celular se tornou o principal portal para o mundo online, ultrapassando notebooks, computadores e tablets. Essa tendência de crescimento do uso de celulares para acessar a internet reflete a importância crescente dos dispositivos móveis em nosso dia a dia.{"\n\n"}
        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://globalad.com.br/blog/digital-brazil-2024-navegue-pelos-dados-e-insights/ ')}>
          Globalad
        </Text>
      </Text>

    
      <Text style={styles.content}>
         Brasil Conectado: Ranking de Usuários nas Redes Sociais em 2024{"\n\n"}
         • Whatsapp: 147 milhões. {"\n"}
         • YouTube: 144 milhões. {"\n"}
         • Instagram: 134,6 milhões.{"\n"}
         • Facebook: 111,3 milhões.{"\n"}
         • TikTok: 98,59 milhões.{"\n"}
         • LinkedIn: 68 milhões. {"\n"}
         • Facebook Messenger: 56,95 milhões. {"\n\n"}
        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.mlabs.com.br/blog/redes-sociais-mais-usadas#:~:text=1.,mensagens%20de%20voz%20no%20aplicativo.')}>
          mLabs
        </Text>
      </Text>

      
      <Text style={styles.content}>
       Você sabia que o Google está constantemente lutando contra o spam para tornar a internet um lugar mais limpo e seguro? Em 2024, 
       a empresa lançou uma série de atualizações, incluindo uma específica em junho, para combater diferentes tipos de spam em todas as línguas.
        Essa atualização faz parte de um esforço contínuo do Google para garantir que os resultados de pesquisa sejam relevantes e confiáveis, 
        oferecendo a melhor experiência possível para os usuários. É como se o Google estivesse sempre um passo à frente, buscando novas formas de identificar e eliminar o spam da internet!.{"\n\n"}
        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://www.conversion.com.br/blog/june-spam-update-2024/')}>
          CONVERSION
        </Text>

      </Text>

      
      <Text style={styles.content}>
      Você sabia que um ataque cibernético recente resultou em um prejuízo de R$ 15 milhões aos cofres públicos? O golpe, que teve como alvo o sistema do governo, combinou duas táticas de ataque: a "engenharia social" e o "phishing".{"\n\n"}
        
        <Text 
          style={styles.link} 
          onPress={() => abrirLink('https://oglobo.globo.com/economia/noticia/2024/08/21/combinacao-de-engenharia-social-e-phishing-expuseram-siafi-a-fraude-de-r-15-milhoes.ghtml ')}>
          Globo.com
        </Text>
      </Text>
    </ScrollView>
  );
}
