import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        padding: 20, // Mais espaço para o layout respirar
        backgroundColor: COLORS.white,
    },
    text1: {
        fontSize: FONT_SIZE.xl,
        color: COLORS.darkGrey,
        marginBottom: 20,
        fontWeight: "bold",
    },
    text2: {
        fontSize: FONT_SIZE.md,
        color: COLORS.grey2,
        marginBottom: 20,
    },
};
