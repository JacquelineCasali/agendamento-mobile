import { color, font } from "../../constants/color.js";


export const styles = {
    container: {
        flex: 1,
        backgroundColor: color.white,
        paddingTop: 40,
    },
    banner: {
        backgroundColor: color.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 25
    },
    name: {
        fontSize: font.md,
        color: color.branco,
        fontWeight: "bold",
        marginTop: 5
    },
    specialty: {
        fontSize: font.sm,
        color: color.branco,
        marginTop: 3
    }
}