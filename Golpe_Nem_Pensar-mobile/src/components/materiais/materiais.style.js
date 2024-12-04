import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    materiais: {
        flex: 1, // O item vai ocupar todo o espaço disponível no contêiner pai
        margin: 6, // Espaço externo de 8px ao redor do componente (separação entre elementos)
        backgroundColor: COLORS.white, // Define a cor de fundo como branco (elegante e limpo)
        padding: 16, // Espaço interno de 16px (mantém o conteúdo afastado das bordas)
        alignItems: "center", // Alinha o conteúdo no centro horizontalmente
        justifyContent: "center", // Alinha o conteúdo no centro verticalmente
        borderRadius: 12, // Bordas arredondadas com raio de 12px para um visual suave
        borderWidth: 1, // Largura da borda de 1px
        borderColor: COLORS.grey1, // Cor da borda definida como cinza claro
        height: 140, // Altura fixa de 140px para consistência visual
        shadowColor: "#000", // Define a cor da sombra como preto (visível em iOS)
        shadowOffset: { width: 0, height: 2 }, // Sombra deslocada 2px para baixo
        shadowOpacity: 0.2, // Transparência da sombra: 20% visível
        shadowRadius: 8, // Define o desfoque da sombra (quanto maior, mais suave)
        elevation: 10, // Sombra para Android; valor muito alto deixaria a sombra exagerada
    },
    icon: {
        width: 70, // Largura do ícone definida em 50px
        height: 70, // Altura do ícone definida em 50px
        marginBottom: 5, // Espaço inferior de 8px abaixo do ícone
    },
    title: {
        fontSize: 12, // Tamanho da fonte do título em 14px
        textAlign: "center", // Alinha o texto no centro horizontalmente
        color: COLORS.black, // Cor do texto definida como branco
    },

};
