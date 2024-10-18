import { Text, View } from "react-native";
import { styles } from "./servico.style";
import Button from "../button/button";

export default function Servico(props) {
  return (
    <View style={styles.servico}>
     <View style={styles.containerText}>

      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.price}>
        {/* colocando a formatacao  */}
        {new Intl.NumberFormat("pt-BR",{
style:"currency",currency:"BRL"
        }).format(props.price)}
      </Text>
      </View>
   
        <View style={styles.containerButton}>
          <Button text="Agendar"  />
       
      </View>
    </View>
  );
}
