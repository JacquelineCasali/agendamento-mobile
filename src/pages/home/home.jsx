
import { FlatList, Text, View } from 'react-native'
import { styles } from "./home.style";
import { doctors } from '../../constants/data';
import Doctor from '../../components/doctor/doctor';
export default function Home(props) {
 function ClickDoctor (id_doctor,name,specialty,icon){
 // console.log(id_doctor,name,specialty,icon);
  //abrindo a tela de serviços
 props.navigation.navigate("services",{
  id_doctor,name,specialty,icon
 })
 }
 
  return (
    <View style={styles.container}>
   
        <Text style={styles.text}>Agende os seus serviços médicos</Text>
   {/* lista de dados */}
   <FlatList data={doctors} keyExtractor={(doc)=>doc.id_doctor}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>{return <Doctor 
      id_doctor={item.id_doctor}  
      name={item.name}
      //icon={item.icon == "M"? icon.male : icon.female}
      icon={item.icon}
      specialty={item.specialty}
      onPress={ClickDoctor}
      />
    


    }}
    />

    </View>
  )
}
