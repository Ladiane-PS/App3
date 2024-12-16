import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Abahome from "../abahome/abahome.jsx";
import Curiosidades from "../Curiosidades/curiosidades.jsx";
import Quiz from "../Quiz/quiz.jsx";
import icon from "../../constants/icon.js";


const Tab = createBottomTabNavigator();

function Main (){
    return <Tab.Navigator>
            <Tab.Screen name="Home" component={Abahome} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={
                        { width:125, height:60 }
                    }/>
                },
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.casa} style={
                        {
                            width: 30, 
                            height: 30,
                            opacity: focused ? 0.3 : 1
                        }
                    }/>
                } 
           }}/>

           <Tab.Screen name="Curiosidades" component={Curiosidades} options={{
               headerTitleAlign: "center",
               headerTitle: () => {
                   return <Image source={icon.logo} style={
                       {
                           width:125, 
                           height:60 
                        }
                    }/>
                },
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.lupa} style={
                    {
                        width: 30, 
                        height: 30,
                        opacity: focused ? 0.3 : 1 
                     }
                }/>
            }
            
           }} />
           
           <Tab.Screen name="Quiz" component={Quiz} options={{
               headerTitleAlign: "center",
               headerTitle: () => {
                   return <Image source={icon.logo} style={
                    {width:125, height:60 }
                }/>
            },
            tabBarIcon: ({focused}) => {
                return <Image source={icon.quiz} style={
                    {
                        width: 30,
                        height: 30,
                        opacity: focused ? 0.3 : 1 
                    }
                }/>
            }
            
        }} />
    </Tab.Navigator>

}

export default Main;