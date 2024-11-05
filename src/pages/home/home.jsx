
import { Alert, FlatList, Text, View } from 'react-native'
import { styles } from "./home.style";

import Doctor from '../../components/doctor/doctor';
import { useEffect, useState } from 'react';
import api from '../../constants/api';
export default function Home(props) {

  const [doctors, setDoctors]=useState([]);
 function ClickDoctor (id_doctor,name,specialty,icon){
 // console.log(id_doctor,name,specialty,icon);
  //abrindo a tela de serviços
 props.navigation.navigate("services",{
  id_doctor,name,specialty,icon
 })
 }
 async function LoadDoctors(){
  try {
    const response =await api.get("/medicos");
    if(response.data){
      setDoctors(response.data);
       }
  } catch (error) {
    if(error.response?.data.error){
      Alert.alert(error.response.data.error)
      
    }else{
      Alert.alert("Ocorreu um error. Tente novamente mais tarde")
    }
   
  }
   }
useEffect(()=>{
  LoadDoctors();
},[])

  return (
    <View style={styles.container}>
   
        <Text style={styles.text}>Agende os seus serviços médicos</Text>
   {/* lista de dados */}
   <FlatList data={doctors} keyExtractor={(doc)=>doc.id_doctor}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>{return <Doctor 
      id_doctor={item.id_doctor}  
      name={item.name}
      //icon={item.icon == "M"? icon.male : icon.female}
      icon={item.icon}
      specialty={item.specialty}
      onPress={ClickDoctor}
      />
    


    }}
    />

    </View>
  )
}
