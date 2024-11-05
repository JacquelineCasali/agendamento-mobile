import { Alert, FlatList,  View } from "react-native";
import { styles } from "./calendario.style";

import Agendamento from "../../components/agendamento/agendamento";
import { useEffect, useState } from "react";
import api from "../../constants/api";

export default function Calendario() {
const [appointments, setAppointments]= useState([]);
  async function LoadAgendamentos(){
    try {
      const response =await api.get("/reservas");
      if(response.data){
       // volta para tela
        setAppointments(response.data)
         }
    } catch (error) {
      if(error.response?.data.error){
        Alert.alert(error.response.data.error)
        
      }else{
        Alert.alert("Ocorreu um error. Tente novamente mais tarde")
      }
     
    }
     }

     async function DeleteAgendamentos(id_appointment){
      try {
        const response =await api.delete("/reservas/" + id_appointment);
        if(response.data?.id_appointment){
         // volta para tela
          LoadAgendamentos();
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
      LoadAgendamentos();
    },[])
    

  return (
    <View style={styles.container}>
      {/* lista de dados */}
      <FlatList
        data={appointments}
        keyExtractor={(doc) => doc.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Agendamento
            id_appointment={item.id_appointment}
              service={item.service}
              doctor={item.doctor}
              specialty={item.specialty}
              booking_date={item.booking_date}
              booking_hour={item.booking_hour}
              onPress={DeleteAgendamentos}
            />
          );
        }}
      />
    </View>
  );
}
