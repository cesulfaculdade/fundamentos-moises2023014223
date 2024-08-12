import { View,StyleSheet,Text } from "react-native";

export default function Footer(){

    
    return(
        <View style={styles.header}>
            <>
                <Text  style={styles.header} >Header</Text> 
            </>
            
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        color: '#CDC',
        marginTop: 30,
        alignItems:'stretch',
        justifyContent: 'center',
        backgroundColor: '#c92041'
      }
})