import React from "react";
import { View ,Text , StyleSheet } from "react-native";

export default function ExpensesSummery({onPeriod, expenses }){
    const Totall = expenses.reduce((sum,expense) => {
        return sum + expense.amount 
    },0)
    
    return(
        <View style={styles.container}>
            <Text style={styles.period}>
                {onPeriod}
            </Text>
            <Text style={styles.sum}>
                ${Totall.toFixed(2)}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:'#e4d9fd',
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center'

    },
    period:{
        fontSize:12,
        color:'#5721d4'
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:"#3e04c3",

    }
})