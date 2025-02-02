import { COLORS } from '../constants/theme.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "../screens/main/main.jsx";
import Proteger from '../screens/Proteger/proteger.jsx';
import Pretexting from '../screens/Pretexting/pretexting.jsx';
import QuidProQuo from '../screens/QuidProQuo/quidproquo.jsx';
import Watering from '../screens/Watering/watering.jsx';
import EngenhariaSocial from '../screens/EngenhariaSocial/engenhariasocial.jsx';
import Phishing from '../screens/Phishing/phishing.jsx';
import Tailgating from '../screens/Tailgating/tailgating.jsx';
import Scareware from '../screens/Scareware/scareware.jsx';
import Baiting from '../screens/Baiting/baiting.jsx';





const Stack = createNativeStackNavigator();


function RoutesPrivate() {
    return <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{
                headerShown: false
        }}/>
       
       <Stack.Screen name="proteger" component={Proteger} options={{
           headerTitle: "Proteger",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="baiting" component={Baiting } options={{
           headerTitle: "Baiting",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
          }
        }}/>
        <Stack.Screen name="pretexting" component={Pretexting} options={{
           headerTitle: "Pretexting",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="quidproquo" component={QuidProQuo} options={{
           headerTitle: "Quid Pro Quo",
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
        <Stack.Screen name="scareware" component={Scareware} options={{
           headerTitle: "Scareware",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="tailgating" component={Tailgating} options={{
           headerTitle: "Tailgating",
           headerTitleAlign: "center",
           headerShadowVisible: false,
           headerTintColor: COLORS.white,
           headerStyle: {
                backgroundColor: COLORS.green
           }
        }}/>
        <Stack.Screen name="watering" component={Watering} options={{
           headerTitle: "Watering",
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