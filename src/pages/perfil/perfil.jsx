
import { Text, View } from 'react-native'
import { styles } from "./perfil.style";

export default function Perfil() {
  return (
    <View style={styles.container}>
   <View style={styles.item}>
   <Text style={styles.title}>Nome:</Text>
        <Text style={styles.text}>Arnaldo Costa</Text>

   </View>
     
   <View style={styles.item}>
   <Text style={styles.title}>Email:</Text>
        <Text style={styles.text}>Arnaldo@teste.com</Text>

   </View>

    </View>
  )
}
