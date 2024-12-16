import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./abahome.style.js";
import { materiais } from "../../constants/data.js";
import Materiais from "../../components/materiais/materiais.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.js";
import {Alert} from "react-native";

function Abahome(props) {
    const { setUser } = useContext(AuthContext);

    // Função que lida com a navegação dinâmica
    function ClickMateriais(screenName) {
        props.navigation.navigate(screenName);
    }

    function Logout() {
        // Exibe o alerta de confirmação
        Alert.alert(
            "Sair", // Título do alerta
            "Tem certeza que deseja sair?", // Mensagem
            [
                {
                    text: "Cancelar", // Opção para cancelar
                    style: "cancel",
                },
                {
                    text: "OK", // Opção para confirmar
                    onPress: () => setUser({}), // Ação de logout
                },
            ],
            { cancelable: false } // Não permite fechar clicando fora da caixa
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Proteja-se dos Golpes: Informação é Poder!</Text>
            <Text style={styles.text2}>
                Aprenda sobre engenharia social e outras práticas de proteção digital.
            </Text>

            <FlatList
                data={materiais}
                keyExtractor={(item) => item.id}
                numColumns={3} // Configura 3 colunas
                contentContainerStyle={{ paddingBottom: 16 }} // Ajuste para espaçamento
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Materiais 
                        title={item.title} 
                        icon={item.icon} 
                        onPress={() => ClickMateriais(item.screen)} // Passa o nome da tela
                    />
                )}
            />

            {/* Botão de Desconectar usando TouchableOpacity */}
            <TouchableOpacity
                style={styles.button} // Estilos do botão, se necessário
                onPress={Logout}
            >
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Abahome;
