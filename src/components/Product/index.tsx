import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Product() {
    return (
        <View style={styles.container}>

            <Text style={styles.name}>
                Carne
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
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

styles