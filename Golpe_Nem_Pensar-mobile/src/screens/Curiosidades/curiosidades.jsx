import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './curiosidades.style.js';

{/*permiti rola a tela  */}
export default function Curiosidades() {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Text style={styles.title}>Curiosidades sobre Segurança Digital</Text>

      {/* Fatos sobre Engenharia Social */}
      <Text style={styles.sectionTitle}>Fatos sobre Engenharia Social</Text>
      <Text style={styles.content}>
        • Sabia que a engenharia social é uma das principais táticas usadas em ataques cibernéticos? Cerca de 98% dos ataques de engenharia social tentam manipular a confiança da vítima para roubar informações.{"\n"}
        • O termo ‘engenharia social’ foi popularizado por Kevin Mitnick, um dos hackers mais famosos do mundo. Ele usava a manipulação psicológica para obter acesso a sistemas.
      </Text>

      {/* Exemplos de Ataques Comuns */}
      <Text style={styles.sectionTitle}>Exemplos de Ataques Comuns</Text>
      <Text style={styles.content}>
        • Phishing: Um dos ataques de engenharia social mais comuns, o phishing tenta enganar as pessoas para que cliquem em links falsos e revelem suas senhas e informações pessoais.{"\n"}
        • Pretexting: Nesse golpe, o invasor finge ser alguém de confiança, como um colega de trabalho ou representante de uma empresa, para obter dados sensíveis.
      </Text>

      {/* Curiosidades sobre o Comportamento Humano e Segurança */}
      <Text style={styles.sectionTitle}>Comportamento Humano e Segurança</Text>
      <Text style={styles.content}>
        • Sabia que o erro humano é a maior vulnerabilidade de segurança em qualquer empresa? Estudos mostram que mais de 90% das violações de dados começam com uma falha humana.{"\n"}
        • Pesquisas indicam que as pessoas tendem a confiar em mensagens urgentes. Por isso, muitos ataques de engenharia social usam a tática de 'urgência' para manipular as vítimas.
      </Text>

      {/* Estatísticas de Segurança Digital */}
      <Text style={styles.sectionTitle}>Estatísticas de Segurança Digital</Text>
      <Text style={styles.content}>
        • De acordo com um relatório da Verizon, 43% dos ataques de engenharia social envolvem phishing. É um dos métodos preferidos dos hackers!{"\n"}
        • Empresas perdem bilhões de dólares por ano devido a ataques de engenharia social e fraudes.
      </Text>

      {/* Mitos e Verdades sobre Segurança Digital */}
      <Text style={styles.sectionTitle}>Mitos e Verdades sobre Segurança Digital</Text>
      <Text style={styles.content}>
        • Mito: “Um antivírus é suficiente para proteger contra ataques.”{"\n"} 
          Verdade: O antivírus é apenas uma camada de proteção; boas práticas e conscientização são essenciais para evitar golpes.{"\n"}
        • Mito: “Ataques cibernéticos só acontecem com grandes empresas.”{"\n"} 
          Verdade: Pequenas e médias empresas também são alvos frequentes, pois costumam ter menos medidas de segurança.
      </Text>

      {/* Dicas Rápidas para se Proteger contra Engenharia Social */}
      <Text style={styles.sectionTitle}>Dicas Rápidas de Proteção</Text>
      <Text style={styles.content}>
        • Não clique em links de remetentes desconhecidos.{"\n"}
        • Sempre desconfie de mensagens que pedem ações urgentes.{"\n"}
        • Verifique as URLs de sites antes de inserir informações pessoais.
      </Text>

      {/* Casos Famosos de Engenharia Social */}
      <Text style={styles.sectionTitle}>Casos Famosos de Engenharia Social</Text>
      <Text style={styles.content}>
        • Em 2013, a Target sofreu uma violação de dados que comprometeu informações de milhões de clientes, causada por um e-mail de phishing.{"\n"}
        • Em 2020, hackers usaram engenharia social para invadir contas de Twitter de figuras públicas, como Barack Obama e Elon Musk, em um esquema de Bitcoin.
      </Text>
    </ScrollView>
  );
}
