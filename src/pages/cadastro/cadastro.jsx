import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


import { styles } from "./cadastro.style";
import Button from "../../components/button/button";
import icon from "../../constants/icon";
export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
      <TextInput placeholder="Nome" style={styles.input} />
        <TextInput placeholder="E-mail" style={styles.input} />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          //    nao mostrar a senha
          secureTextEntry={true}
        />
        <Button text="Cadastrar" />
      </View>

      <View style={styles.footer}>
        <Text>Já tem conta.</Text>
        <TouchableOpacity >
          <Text style={styles.footerLink}> Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
