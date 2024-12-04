import {Alert, Text, TouchableOpacity} from "react-native";
import { styles } from "./button.style.js";

//props - preparado para receber as  propriedade
//TouchableOpacity - Opacidade tocável- serve - tudo o que eu colocar dentro dela vai se torbabr clicável 
function Button(props) {

    // function TesteClick() {
    //     Alert.alert("Clicou no nosso botão");
    // }
    // a {}prmeira chave usar objeto javascript e o segundo {}de dentro colocar meu objeto
    return <TouchableOpacity 

        style={[styles.btn, 
        props.theme == "Bred" ?
            styles.Bred: styles.Bgreen]}

        onPress={props.onPress} >
        <Text style={styles.text}> 
            {props.text}
        </Text>
    </TouchableOpacity>   
}

export default Button; // todo mundo que import o butto vai pode ve ele pois estou exportando ele aqui no final