import { FlatList, View, Text, Image } from "react-native";
import { styles } from "./servicos.style";
import Servico from "../../components/servico/servico";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";

export default function Servicos() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={icon.female} />
        <Text style={styles.name}>Heder</Text>
        <Text style={styles.specialty}>Cardiologista</Text>
      </View>

      {/* lista de dados */}
      <FlatList
        data={doctors_services}
        keyExtractor={(ser) => ser.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Servico description={item.description} price={item.price} />;
        }}
      />
    </View>
  );
}
