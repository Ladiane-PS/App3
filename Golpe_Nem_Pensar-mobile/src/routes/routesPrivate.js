import { COLORS } from '../constants/theme.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "../screens/main/main.jsx";
import AtaqueDirecionado from "../screens/AtaqueDirecionado/ataquedirecionado.jsx";
import ComercioEletronico from "../screens/ComercioEletronico/comercioeletronico.jsx";
import CopiaSeguranca from "../screens/CopiaSeguranca/copiaseguranca.jsx";
import DispositivosMovel from "../screens/DispositivosMovel/dispositivomovel.jsx";
import EngenhariaSocial from "../screens/EngenhariaSocial/engenhariasocial.jsx";
import Phishing from "../screens/Phishing/phishing.jsx";
import RedesSociais from "../screens/RedesSociais/redessociais.jsx";
import Senha from "../screens/Senha/senha.jsx";
import Spam from "../screens/Spam/spam.jsx";


const Stack = createNativeStackNavigator();


function RoutesPrivate() {
    return <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{
                headerShown: false
        }}/>
       
       <Stack.Screen name="ataquedirecionado" component={AtaqueDirecionado} options={{
           headerTitle: "Ataque Direcionado",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>

        <Stack.Screen name="comercioeletronico" component={ComercioEletronico} options={{
           headerTitle: "Cormércio Eletrônico",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>

        <Stack.Screen name="copiaseguranca" component={CopiaSeguranca} options={{
           headerTitle: "Cópia de segurança",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="dispositivosmovel" component={DispositivosMovel} options={{
           headerTitle: "Dispositivos Móvel",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="engenhariasocial" component={EngenhariaSocial} options={{
           headerTitle: "Engenharia Social",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="phishing" component={Phishing} options={{
           headerTitle: "Phishing",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="redessociais" component={RedesSociais} options={{
           headerTitle: "Redes Sociais",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="senha" component={Senha} options={{
           headerTitle: "Senha",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="spam" component={Spam} options={{
           headerTitle: "Spam",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
    </Stack.Navigator> 
}

export default RoutesPrivate;