import React from "react";
import { View, Text , StyleSheet} from "react-native"
import ExpensesOutput from "../components/ExpensesShare/ExpensesOutput";




export default function RecentExpense(){
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()
    const last7Days = day + 7;
    if (last7Days > 30 || last7Days > 31) {
        month = month + 1
    }
    return(
        <ExpensesOutput period={"Last 7 days"} />
    )
}



const styles = StyleSheet.create({
    
})
