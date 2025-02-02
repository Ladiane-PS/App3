//import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.greenclaro,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
    color: COLORS.black,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius:10,
    borderWidch:1,
    bordercolor: COLORS.black,
    textAlign: "justify",
  },
  link: {
    fontSize: FONT_SIZE.sm, // Fonte pequena
    color: COLORS.blue, // Link azul para destacar
    textDecorationLine: "underline", // Sublinhado
    marginBottom: 10, // Espaço inferior
    textAlign: "justify",
  },
};
