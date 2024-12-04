import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#E3F2FD',
    },
    pergunta: {
      marginBottom: 20,
    },
    resultado: {
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    content: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    botaoResposta: {
      backgroundColor: '#BBDEFB',
      padding: 15,
      marginVertical: 8,
      borderRadius: 5,
    },
    textoResposta: {
      fontSize: 16,
      color: '#0D47A1',
      textAlign: 'center',
    },
  };