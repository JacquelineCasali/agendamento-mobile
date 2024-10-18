import { FlatList, Text, View } from "react-native";
import { styles } from "./calendario.style";
import { appointments, doctors } from "../../constants/data";
import Agendamento from "../../components/agendamento/agendamento";

export default function Calendario() {
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
              service={item.service}
              doctor={item.doctor}
              specialty={item.specialty}
              booking_date={item.booking_date}
              booking_hour={item.booking_hour}
            />
          );
        }}
      />
    </View>
  );
}
