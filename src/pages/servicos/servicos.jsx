import { FlatList, View, Text, Image } from "react-native";
import { styles } from "./servicos.style";
import Servico from "../../components/servico/servico";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";

export default function Servicos(props) {
const id_doctor=props.route.params.id_doctor;
const name=props.route.params.name;
const specialty =props.route.params.specialty;
const iconDoctor=props.route.params.icon;


  function ClickServicos(id_service){
   // console.log("Clicou: "+ id_service);
   props.navigation.navigate("agendamento",{
    id_doctor,
    id_service
   })
  }
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={iconDoctor=="M"?icon.male : icon.female} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      {/* lista de dados */}
      <FlatList
        data={doctors_services}
        keyExtractor={(ser) => ser.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Servico
          id_service={item.id_service}
          description={item.description} price={item.price} 
          onPress={ClickServicos}
          
          />;
        }}
      />
    </View>
  );
}
