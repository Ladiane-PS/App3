import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
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
  {
    pergunta: 'O que é engenharia social?',
    respostas: [
      'Um tipo de ataque cibernético baseado na manipulação psicológica.',
      'Um sistema de segurança digital.',
      'Uma técnica para melhorar a usabilidade de softwares.',
      'Um programa de criptografia de dados.'
    ],
    respostaCorreta: 0
  },
  {
    pergunta: 'O que fazer ao receber um e-mail suspeito solicitando seus dados?',
    respostas: [
      'Clicar no link para verificar a veracidade.',
      'Não clicar, checar o remetente e reportar o e-mail.',
      'Responder solicitando mais informações.',
      'Ignorar e continuar usando normalmente.'
    ],
    respostaCorreta: 1
  },
  {
    pergunta: 'Como um ataque de vishing (phishing por voz) ocorre?',
    respostas: [
      'Através de anúncios online falsos.',
      'Por meio de SMS fraudulentos.',
      'Com chamadas telefônicas onde o golpista finge ser uma instituição confiável.',
      'Através de vírus em e-mails.'
    ],
    respostaCorreta: 2
  },
  {
    pergunta: 'Qual dessas senhas é mais segura?',
    respostas:[
      '123456',
      'senha123',
      'f#9gB!xT2&',
      'nome + data de nascimento'
    ],
    respostaCorreta: 2  
  },
  {
    pergunta: 'O que é um ataque de pretexting?',
    respostas:[
      'Quando hackers invadem redes Wi-Fi públicas.',
      'Quando um golpista inventa uma história falsa para obter informações sigilosas.',
      'Quando um vírus se espalha por dispositivos USB.',
      'Uma técnica usada para proteger dados sensíveis.'
    ],
    respostaCorreta: 1
  },
  {
    pergunta: 'Qual destas práticas NÃO é recomendada para segurança digital?',
    respostas: [
      'Ativar autenticação em dois fatores.',
      'Manter o antivírus atualizado.',
      'Usar Wi-Fi público para acessar contas bancárias.',
      'Criar senhas longas e únicas.'
    ],
    respostaCorreta: 2
  },
  {
    pergunta: 'O que caracteriza um ataque de Watering Hole?',
    respostas: [
      'Um criminoso se aproxima da vítima pedindo informações sigilosas.',
      'O hacker invade um sistema e apaga todos os dados do usuário.',
      'A vítima recebe uma ligação falsa pedindo confirmação de senha.',
      'O golpista infecta sites frequentemente visitados pelo alvo para espalhar malware.'
    ],
    respostaCorreta: 3
  },
  {
    pergunta: 'No ataque Quid Pro Quo, o que o golpista oferece em troca das informações da vítima?',
    respostas: [
      'Um software gratuito ou suporte técnico falso.',
      'Um e-mail de phishing com link malicioso.',
      'Um alerta falso de vírus para enganar a vítima.',
      'Um código QR que redireciona para um site seguro.'
    ],
    respostaCorreta: 0
  },
  {
    pergunta: 'Como funciona um ataque de Scareware?',
    respostas: [
      'O golpista tenta se passar por um funcionário para entrar em locais restritos.',
      'O usuário recebe uma mensagem falsa informando que seu dispositivo está infectado',
      'O criminoso instala um vírus disfarçado de software útil.',
      'Um pen drive infectado é deixado em um local público.'
    ],
    respostaCorreta: 1
  },
  {
    pergunta: 'Qual é a forma mais comum de phishing?',
    respostas:[
       'Chamadas telefônicas fraudulentas',
       'Mensagens criptografadas',
       'Propagandas legítimas em sites',
       'E-mails falsos com links maliciosos'
    ],
    respostaCorreta: 3 
  },

];

export default function Quiz() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostaCorreta, setRespostaCorreta] = useState(null);

  const verificarResposta = (indice) => {
    setRespostaSelecionada(indice);
    setRespostaCorreta(perguntas[perguntaAtual].respostaCorreta);
    
    if (indice === perguntas[perguntaAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }
  };

  const proximaPergunta = () => {
    if (perguntaAtual + 1 < perguntas.length) {
      setPerguntaAtual(perguntaAtual + 1);
      setRespostaSelecionada(null);
      setRespostaCorreta(null);
    } else {
      setQuizFinalizado(true);
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setQuizFinalizado(false);
    setRespostaSelecionada(null);
    setRespostaCorreta(null);
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
              style={[
                styles.botaoResposta,
                respostaSelecionada !== null && index === respostaCorreta
                  ? styles.respostaCorreta
                  : respostaSelecionada === index
                  ? styles.respostaErrada
                  : null
              ]}
              onPress={() => verificarResposta(index)}
              disabled={respostaSelecionada !== null} // Impede mais de um clique
            >
              <Text style={styles.textoResposta}>{resposta}</Text>
            </TouchableOpacity>
          ))}

          {respostaSelecionada !== null && (
            <View>
              {respostaSelecionada === respostaCorreta ? (
                <Text style={[styles.feedback, styles.feedbackAcerto]}>✅ Resposta correta!</Text>
              ) : (
                <Text style={[styles.feedback, styles.feedbackErro]}>
                  ❌ Resposta errada! A correta era: "{perguntas[perguntaAtual].respostas[respostaCorreta]}"
                </Text>
              )}
              <Button title="Próxima Pergunta" onPress={proximaPergunta} />
            </View>
          )}
        </View>
      )}
    </View>
  );
}
