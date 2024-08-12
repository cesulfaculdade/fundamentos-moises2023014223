import { View,StyleSheet,Text,SafeAreaView } from "react-native";

export default function Header(){

    
    return(
        <SafeAreaView style={styles.header}>
            <>
                <Text  style={styles.header} >Header</Text> 
            </>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        flex : 1,
        color: '#CDC',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c92041',
        width: 400,
        borderColor: 'gray',
        borderWidth: 3
      }
})