import { FlatList, Text, View } from "react-native";
import { styles } from "./abahome.style.js";
import { materiais } from "../../constants/data.js";
import Materiais from "../../components/materiais/materiais.jsx";

function Abahome(props) {
    //funão que lida com a navegação dinâmica
    function ClickMateriais(screenName){
        props.navigation.navigate(screenName);
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
                        onPress={() => ClickMateriais(item.screen)}//passa o nome da tela 
                    />
                    
                )}
            />
        </View>
    );
}

export default Abahome;
