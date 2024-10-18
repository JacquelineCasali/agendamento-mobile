import { color, font } from "../../constants/color";


export const styles={

    agendamento:{
        backgroundColor:color.branco,
        flex:1,
        padding:12,
      
        borderWidth: 1,
        borderColor: color.gray4,
       
  
        
    },


    name: {
      fontSize: font.md,
      color: color.gray1,
      marginBottom: 2
  },
  specialty: {
      fontSize: font.sm,
      color: color.gray3,
      marginBottom: 4
  },

  icon: {
   width: 30,
   height: 30,
   marginRight: 5
},

bookingDate: {
  
    fontSize: font.sm,
    color: color.gray3,
    marginTop: 3,

},
bookingHour: {
    fontSize: font.sm,
    color: color.gray3,
    marginTop: 3
},
booking: {
    flexDirection: "row"
},
containerBooking: {
    flex: 1
},
containerButton: {
    marginTop: 5,
    
},
container: {
    flexDirection: "row"
}
}