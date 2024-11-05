import { color, font } from "../../constants/color.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: color.white,
        paddingTop: 12,
    },
    item: {
        borderWidth: 1,
        borderColor: color.gray4,
        paddingLeft: 15,
        paddingRight: 15,
       
        paddingTop: 25,
        paddingBottom: 15
    },
    title: {
        fontSize: font.sm,
        color: color.gray3,
        marginBottom: 4
    },
    text: {
        fontSize: font.md,
        color: color.gray1
    }
}