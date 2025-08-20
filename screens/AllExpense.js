import React from "react";
import { View, Text , StyleSheet} from "react-native"
import ExpensesOutput from "../components/ExpensesShare/ExpensesOutput";




export default function AllExpense(){
    return(
        <ExpensesOutput period={"Total"} /> 
    )
}



const styles = StyleSheet.create({
    container:{
     

    }
})
