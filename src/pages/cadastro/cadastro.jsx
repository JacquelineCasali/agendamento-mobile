import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


import { styles } from "./cadastro.style";
import Button from "../../components/button/button";
import icon from "../../constants/icon";
import api from "../../constants/api";
import { useState } from "react";
export default function Cadastro(props) {
 
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 async function Cadastro(){
try {
  const response =await api.post("/users/register",{
   name, email , password
  });
  if(response.data){
    console.log(response.data);
    
  }
} catch (error) {
  if(error.response?.data.error){
    Alert.alert(error.response.data.error)
    
  }else{
    Alert.alert("Ocorreu um error. Tente novamente mais tarde")
  }
 
}
 }
 
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
      <TextInput placeholder="Nome" 
      
      style={styles.input}
      onChangeText={(texto)=>setName(texto)}
      />
        <TextInput placeholder="E-mail"
         style={styles.input} 
         onChangeText={(texto)=>setEmail(texto)}
         />
       
       
        <TextInput
          placeholder="Senha"
          style={styles.input}
          //    nao mostrar a senha
          secureTextEntry={true}
          onChangeText={(texto)=>setPassword(texto)}
        />
        <Button text="Cadastrar"
        onPress={Cadastro} 
        />
      </View>

      <View style={styles.footer}>
        <Text>Já tem conta.</Text>
        <TouchableOpacity 
         onPress={()=> props.navigation.navigate("login")}
        >
          <Text
          style={styles.footerLink}>
            
             Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
