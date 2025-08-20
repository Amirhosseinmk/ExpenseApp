import { View,Pressable,Text,StyleSheet } from "react-native"



export default function Button({onPress, children,mode}){
    return(
       <View>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={[styles.button, mode==='flat' && styles.flat]}>
                <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
                    {children}
                </Text>
            </View>
        </Pressable>
       </View>
    )
}




const styles = StyleSheet.create({
    button:{
        borderRadius:4,
        padding:8,
        backgroundColor:"#3e04c3"
    },
    flat:{
        backgroundColor:'transparent'
    },
    buttonText:{
        color:"#fff",
        textAlign:"center",

    },
    flatText:{
        color:"#a281f0"
    },
    pressed:{
        opacity:0.75,
        borderRadius:4,
        backgroundColor:"#c6affc"
    },
    
})