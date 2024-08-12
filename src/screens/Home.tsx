import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "../components/Product";

export function Home() {

    function handleProductAdd() {
        console.log('Adicionei o produto')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaySate}>Segunda-Feira, 05 de Agosto de 2024</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Produto"
                    placeholderTextColor='#BDBABA'
                    keyboardType="default"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleProductAdd}>
                    <Text style={styles.textButton}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>
            <Text style={styles.listTitle} >Compras Pendentes</Text>
            <Product/>
            {/* <View style={styles.list}>
                <Text style={styles.emptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        padding: 24,


    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#fff',
        padding: 16,
        fontSize: 16,
        borderRadius: 5,
        marginRight: 16,
    },

    button: {
        width: 56,
        height: 56,
        backgroundColor: '#31C667',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },

    textButton: {
        color: '#fff',
        fontSize: 24,
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 18,
    },

    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,


    },

    todaySate: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'normal',
    },
    listTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 36,
        marginBottom: 16
    },
    emptyText: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        alignSelf: "center"
    },
    list: {
        justifyContent: "center",
        alignContent: "center",
        flex: 1
    }


});