import {  Text, TouchableOpacity } from "react-native"
import { styles } from "./button.style"

export default function Button(props) {
 
//  function Click(){
//     Alert.alert("Clicou no botão")
//  }
    return (
//    TouchableOpacity clicavel 
   <TouchableOpacity onPress={props.onPress} 
   
   style={[styles.btn,
      props.theme == "danger" ? styles.danger : styles.primary]}
   
   >
  
  <Text style={styles.text}>
      {props.text}
    </Text>
   </TouchableOpacity>
 
  )
}
