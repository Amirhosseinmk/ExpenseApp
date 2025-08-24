import React from "react";
import { View, Text ,StyleSheet , TextInput} from "react-native";


export default function ButtonForm({label , setLabelConfig}){
    
let inputStyle = [styles.input]
if (setLabelConfig && setLabelConfig.multiline){
    inputStyle.push(styles.inputMulti)
}
    return(
        <View style={[styles.container, !setLabelConfig.multiline && {flex:1}]}>
            <Text style={styles.title}>{label}</Text>
            <TextInput {...setLabelConfig} style={inputStyle}/>
        </View>
    )

}



const styles = StyleSheet.create({
    container:{
        marginHorizontal:4,
        marginVertical:8,
        
    },
    input:{
        padding:6,
        borderRadius:6,
        backgroundColor:"#c6affc",
        fontSize:18,
        color:"#2d0689"

    },
    title:{
        color:"#e4d9fd",
        fontSize:15,
        fontWeight:'bold',
        marginBottom:9,
    },
    inputMulti:{
        minHeight:100,
        textAlignVertical:'top'
    }
})