import React, { useContext } from "react";
import { View, Text , StyleSheet} from "react-native"
import ExpensesOutput from "../components/ExpensesShare/ExpensesOutput";
import { ExpenseContex } from "../../contex/ExpenseCtx";
import calculateDay from "../unit/time"


export default function RecentExpense(){
    
    const expenseCtx = useContext(ExpenseContex)
    const recentExpenses = expenseCtx.expense.filter((expense) => {
        const today = new Date();
        const lastSevenDay = calculateDay(today,7)
    return expense.date > lastSevenDay
    })
    return(
        <ExpensesOutput expenses={recentExpenses} period={"Last 7 days"} />
    )
}



const styles = StyleSheet.create({
    
})
