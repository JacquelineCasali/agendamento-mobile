import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../pages/main/main";

import Servicos from "../pages/servicos/servicos";
import { color } from "../constants/color";
import Schedule from "../pages/schedule/schedule";
const Stack = createNativeStackNavigator();
export default function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="services"
        component={Servicos}
        options={{
          headerTitle: "Serviços",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: color.branco,
          headerStyle: {
            backgroundColor: color.blue,
          },
        }}
      />

      <Stack.Screen
        name="agendamento"
        component={Schedule}
        options={{
          headerTitle: "Fazer uma reserva",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: color.blue
   
        }}
      />
    </Stack.Navigator>
  );
}
