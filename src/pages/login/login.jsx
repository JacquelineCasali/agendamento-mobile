import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


import { styles } from "./login.style";
import Button from "../../components/button/button";
import icon from "../../constants/icon";
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
        <TextInput placeholder="E-mail" style={styles.input} />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          //    nao mostrar a senha
          secureTextEntry={true}
        />
        <Button text="Login" />
      </View>

      <View style={styles.footer}>
        <Text>Não tem conta.</Text>
        <TouchableOpacity >
          <Text style={styles.footerLink}> Clique aqui para criar conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
