import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../home/home";
import Calendario from "../calendario/calendario";
import Perfil from "../perfil/perfil";
import icon from "../../constants/icon";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",

          headerTitle: () => {
            return (
              <Image
                source={icon.logo}
                style={{ width: 125, height: 29, marginTop: 25 }}
              />
            );
          },
          // remover testo
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.home}
                style={{
                  width: 35,
                  height: 35,

                  opacity: focused ? 0.5 : 1,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendario}
        options={{
          headerTitleAlign: "center",

          headerTitle: () => {
            return (
              <Image
                source={icon.logo}
                style={{ width: 125, height: 29, marginTop: 25 }}
              />
            );
          },
          // remover testo
          tabBarShowLabel: false,
          //recarregar pagina
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.calendar}
                style={{ width: 35, height: 35, opacity: focused ? 0.5 : 1 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerTitleAlign: "center",

          headerTitle: () => {
            return (
              <Image
                source={icon.logo}
                style={{ width: 125, height: 29, marginTop: 25 }}
              />
            );
          },
          // remover testo
          tabBarShowLabel: false,
          //recarregar pagina
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.profile}
                style={{ width: 35, height: 35, opacity: focused ? 0.5 : 1 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
