import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: COLORS.white, // Fundo branco para um visual limpo
    padding: 20, // Espaço interno
  },
  header: {
    fontSize: FONT_SIZE.xl, // Título grande
    fontWeight: "bold", // Negrito
    color: COLORS.black, // Cor preta para destaque
    marginBottom: 10, // Espaço inferior
    textAlign: "center", // Centralizado
  },
  subHeader: {
    fontSize: FONT_SIZE.md, // Texto médio
    color: COLORS.grey2, // Cor cinza para contraste suave
    marginBottom: 20, // Espaço inferior
    textAlign: "center", // Centralizado
  },
  videoContainer: {
    height: 220, // Altura fixa para o vídeo
    marginBottom: 20, // Espaço abaixo do vídeo
  },
  video: {
    flex: 1, // O vídeo ocupa todo o espaço do container
  },
  textContainer: {
    marginTop: 10, // Espaço acima do texto
  },
  text: {
    fontSize: FONT_SIZE.sm, // Fonte pequena
    color: COLORS.black, // Texto preto
    marginBottom: 8, // Espaço entre parágrafos
  },
  link: {
    fontSize: FONT_SIZE.sm, // Fonte pequena
    color: COLORS.blue, // Link azul para destacar
    textDecorationLine: "underline", // Sublinhado
    marginBottom: 10, // Espaço inferior
  },
};
