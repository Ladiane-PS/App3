import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.greenclaro 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  pergunta: {
    width: '100%',
    alignItems: 'center'
  },
  botaoResposta: {
    width: '100%',
    padding: 15,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center'
  },
  textoResposta: {
    color: COLORS.white,
    fontSize: 16
  },
  feedback: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  feedbackAcerto: {
    color: COLORS.green
  },
  feedbackErro: {
    color: COLORS.red
  },
  respostaCorreta: {
    backgroundColor: COLORS.green
  },
  respostaErrada: {
    backgroundColor: COLORS.red
  },
  resultado: {
    alignItems: 'center'
  }
};
