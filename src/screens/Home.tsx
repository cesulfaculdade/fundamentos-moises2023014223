import { View,Text,Button, TextInput, StyleSheet } from "react-native";

export function Home(){
    return (
      <View style={styles.container}>
        <TextInput/>
      </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EAEAEA",
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  });
  