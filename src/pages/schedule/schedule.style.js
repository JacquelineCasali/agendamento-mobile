import { color, font } from "../../constants/color";


export const styles = {
    container: {
        flex: 1,
        backgroundColor: color.branco,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginBottom: 20
    },
    theme: {
        todayTextColor: color.red,
        selectedDayBackgroundColor: color.blue,
        selectedDayTextColor: color.branco,
        arrowColor: color.blue
    },
    textHour: {
        fontSize: font.lg,
        fontWeight: "bold",
        color: color.gray2,
        marginTop: 20
    }
}