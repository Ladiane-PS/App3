import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './quiz.style';

const perguntas = [
  {
    pergunta: 'O que é phishing?',
    respostas: [
      'Uma técnica para ganhar seguidores em redes sociais',
      'Um tipo de ataque de engenharia social que engana usuários para obter informações pessoais',
      'Um software antivírus',
      'Uma técnica para acelerar a internet'
    ],
    respostaCorreta: 1
  },
  {
    pergunta: 'Qual é a melhor prática para evitar ataques de engenharia social?',
    respostas: [
      'Nunca usar senha',
      'Compartilhar informações pessoais publicamente',
      'Desconfiar de links e e-mails de remetentes desconhecidos',
      'Usar qualquer software disponível na internet'
    ],
    respostaCorreta: 2
  },
  // Adicione mais perguntas aqui
];


export default function Quiz() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const verificarResposta = (indice) => {
    if (indice === perguntas[perguntaAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }
    if (perguntaAtual + 1 < perguntas.length) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      setQuizFinalizado(true);
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setQuizFinalizado(false);
  };

  return (
    <View style={styles.container}>
      {quizFinalizado ? (
        <View style={styles.resultado}>
          <Text style={styles.title}>Quiz Finalizado!</Text>
          <Text style={styles.content}>Pontuação: {pontuacao} de {perguntas.length}</Text>
          <Button title="Reiniciar Quiz" onPress={reiniciarQuiz} />
        </View>
      ) : (
        <View style={styles.pergunta}>
          <Text style={styles.title}>{perguntas[perguntaAtual].pergunta}</Text>
          {perguntas[perguntaAtual].respostas.map((resposta, index) => (
            <TouchableOpacity
              key={index}
              style={styles.botaoResposta}
              onPress={() => verificarResposta(index)}
            >
              <Text style={styles.textoResposta}>{resposta}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}