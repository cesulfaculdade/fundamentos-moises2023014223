import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
    },
    name: {
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#E23C44",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    textButton:{
        fontSize: 30,
        color: "#fff",
        margin: "auto"
    }

});