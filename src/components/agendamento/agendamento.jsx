
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './agendamento.style'
import Button from '../button/button'
import icon from '../../constants/icon'

export default function Agendamento(props) {
  return (

    

<View style={styles.agendamento}>
<Text style={styles.name} >
      {props.service} - {props.doctor}
    </Text>

    <Text style={styles.specialty}>
      {props.specialty}
    </Text>
<View style={styles.container}>
<View style={styles.containerBooking}>
<View style={styles.booking}>
<Image 
style={styles.icon}
source={icon.calendar}/>
<Text
style={styles.bookingDate}
>{props.booking_date}</Text>

</View>
<View style={styles.booking}>
<Image 
style={styles.icon}
source={icon.clock}/>
<Text
style={styles.bookingHour}
>{props.booking_hour}</Text>

</View>
</View>
<View style={styles.containerButton}>
<Button text="Cancelar Agendamento" theme="danger" />
</View>
</View>

</View>

 
  
  )
}
