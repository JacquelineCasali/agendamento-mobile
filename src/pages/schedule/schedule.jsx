import { Alert, Text, View } from "react-native";
import { styles } from "./schedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendario";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";
import api from "../../constants/api";
LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";
export default function Schedule(props) {
  const id_doctor=props.route.params.id_doctor;
  const id_service=props.route.params.id_service;
  // dia selecionado
  // slice numero de caracteres
  const [selected, setSelected] = useState(new Date().toISOString().slice(0,10));
  const [selectedHour, setSelectedHour] = useState("");

async function ClickReserva(){
  try {
    const response =await api.post("/reservas",{
      id_doctor,id_service,
      booking_date:selected,
      booking_hour:selectedHour
    });
    if(response.data?.id_appointment){
     // volta para tela
      props.navigation.popToTop();
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
     <View>

   
      <Calendar
        theme={styles.theme}
        onDayPress={(day) => {
          setSelected(day.dateString)
        }}
        markedDates={{ [selected]: { selected: true } }}
       
       // data de hoje
        minDate={new Date().toDateString()}
      />
      
<View>
  <Text style={styles.textHour}>
    Horário
  </Text>
  </View>

<View>
  <Picker
  selectedValue={selectedHour}
  onValueChange={(itemValue,itemIndex)=>{
    setSelectedHour(itemValue)
  }}
  >
<Picker.Item
label="09:00" value={"09:00"}
/>
<Picker.Item
label="09:30" value={"09:30"}
/><Picker.Item
label="10:00" value={"10:00"}
/>
  </Picker>
</View>
</View>
<View>
  <Button text="Agendar"
  onPress={ClickReserva}
  />
</View>
    </View>
  );
}
