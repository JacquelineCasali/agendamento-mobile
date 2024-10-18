import { color, font } from "../../constants/color";


export const styles={

    doctor:{
        backgroundColor:color.branco,
        flex:1,
        padding:10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: color.gray4,
        // marginTop: 15,
        marginBottom: 5,
        borderRadius: 6
  
        
    },


    name: {
      fontSize: font.md,
      color: color.gray1,
      marginTop: 5
  },
  specialty: {
      fontSize: font.sm,
      color: color.gray3
  },

  icon: {
   width: 50,
   height: 50,
   marginRight: 8
},
}