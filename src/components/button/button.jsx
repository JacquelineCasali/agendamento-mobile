import { Alert, Text, TouchableOpacity } from "react-native"
import { styles } from "./button.style"

export default function Button(props) {
 
 function Click(){
    Alert.alert("Clicou no botão")
 }
    return (
//    TouchableOpacity clicavel 
   <TouchableOpacity onPress={Click} style={styles.btn} >
  <Text style={styles.text}>
      {props.text}
    </Text>
   </TouchableOpacity>
 
  )
}
