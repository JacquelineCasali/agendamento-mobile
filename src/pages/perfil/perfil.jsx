
import { Text, View } from 'react-native'
import { styles } from "./perfil.style";
import api from '../../constants/api';
import { useContext, useEffect, useState } from 'react';
import Button from '../../components/button/button';
import { AuthContext } from '../../context/auth';

export default function Perfil() {
 const {setUser}= useContext(AuthContext)
  const [name, setName]=useState("")
 const [email, setEmail]=useState("")

  async function LoadPerfil(){
    try {
      const response =await api.get("/users/perfil");
      if(response.data?.name){
       setName(response.data.name)
       setEmail(response.data.email)
         }
    } catch (error) {
      if(error.response?.data.error){
        Alert.alert(error.response.data.error)
        
      }else{
        Alert.alert("Ocorreu um error. Tente novamente mais tarde")
      }
     
    }
     }

function Logout(){
  api.defaults.headers.common["Authorization"] ="";
  
setUser({});
}

useEffect(()=>{
  LoadPerfil();
},[])
 
  return (
    <View style={styles.container}>
   <View style={styles.item}>
   <Text style={styles.title}>Nome:</Text>
        <Text style={styles.text}>{name}</Text>

   </View>
     
   <View style={styles.item}>
   <Text style={styles.title}>Email:</Text>
        <Text style={styles.text}>{email}</Text>

   </View>
   <View style={styles.item}>
  <Button text="Desconectar" theme="danger"
  onPress={Logout}
  />

   </View>
    </View>
  )
}
