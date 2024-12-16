import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        padding: 10, // Mais espaço para o layout respirar
        backgroundColor: COLORS.white,
    },
    text1: {
        fontSize: FONT_SIZE.xl,
        color: COLORS.darkGrey,
        marginBottom: 10,
        fontWeight: "bold",
    },
    text2: {
        fontSize: FONT_SIZE.md,
        color: COLORS.grey2,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'red',  // Cor de fundo do botão
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.sm,
        fontWeight: 'bold',
    },
    
};
