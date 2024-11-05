import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./login.style";
import Button from "../../components/button/button";
import icon from "../../constants/icon";
import { useContext, useState } from "react";
import api from "../../constants/api";
import { AuthContext } from "../../context/auth";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  async function Login() {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      if (response.data) {
        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        setUser(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um error. Tente novamente mais tarde");
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          onChangeText={(texto) => setEmail(texto)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          //    nao mostrar a senha
          secureTextEntry={true}
          onChangeText={(texto) => setPassword(texto)}
        />
        <Button text="Login" onPress={Login} />
      </View>

      <View style={styles.footer}>
        <Text>Não tem conta.</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("cadastro")}>
          <Text style={styles.footerLink}> Clique aqui para criar conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
