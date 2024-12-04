import { Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./materiais.style.js"; // Certifique-se de que o caminho está correto.

function Materiais({ title, icon, onPress }) { 
    return (
        <TouchableOpacity style={styles.materiais} onPress={onPress}>
            {/* Exibe a imagem do ícone, com verificação para garantir que é válido */}
            <Image source={icon} style={styles.icon} resizeMode="contain" />
            {/* Exibe o título abaixo do ícone */}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Materiais;
