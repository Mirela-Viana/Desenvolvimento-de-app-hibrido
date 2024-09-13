import { theme } from "@/theme/index"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
        gap:7,
    },
    letter:{
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
    },
    text: {
        fontFamily: theme.fontFamily.medium,
    },
})