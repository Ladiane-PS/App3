// export para quem importa o button fazer uso desse styles 
import { COLORS, FONT_SIZE } from "../../constants/theme.js";
export const styles={

    btn: {
        with: "100%",
        padding: 15,
        margin:40,
        borderRadius: 30

    },
    Bgreen: {
        backgroundColor: COLORS.green,

    },
    Bred: {
        backgroundColor: COLORS.red,
    },
    text: {
        color: "#fff",
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    }

}