import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../pages/login/login.jsx"
import Cadastro from '../pages/cadastro/cadastro.jsx';
const Stack = createNativeStackNavigator();


export default function RoutesOpen() {
   
    return(
    <Stack.Navigator>
           <Stack.Screen name="login" component={Login}
           
           options={{headerShown:false}}
           />

        <Stack.Screen name="cadastro" component={Cadastro}
         options={{headerShown:false}}
        />
    
    
    </Stack.Navigator>
)
  
}
