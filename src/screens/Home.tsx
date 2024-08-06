import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de compras</Text>
            <Text tyle={styles.todayState} >Segunda-feira, 05 de Agosto de 2024</Text>
            <View style={styles.form} >
                <TextInput value={"name"} style={styles.input}
                    placeholder="Nome do produto"
                    placeholderTextColor='#BDBABA'
                    keyboardType="default"
                />
                <TouchableOpacity style={styles.button}
                    onPress={handleProductAdd}>
                    <Text style={styles.textButton}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};

function handleProductAdd(){
    let text ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        padding: 24,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#fff",
        padding: 16,
        fontSize: 16,
        borderRadius: 5,
        marginRight: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31C667",
        alignItems: 'center',
        justifyContent: "center",
    },
    textButton: {
        color: "#fff",
        fontSize: 24
    },
    form: {
        flexDirection: "row",
        width: "100%",
        marginTop: 18
    },
    title:{
        fontSize:24,
        fontWeight: "bold",
        marginTop: 48
    },
    todayState:{
        color: "#000",
        fontSize: 16,

    }

});
