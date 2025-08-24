import React, { useContext } from "react";
import { View, Text , StyleSheet} from "react-native"
import ExpensesOutput from "../components/ExpensesShare/ExpensesOutput";
import { ExpenseContext } from '../contex/ExpenseCtx';
import {calculateDay} from "../unit/time"


export default function RecentExpense(){
    
    const expenseCtx = useContext(ExpenseContext)
    const recentExpenses = expenseCtx.expense.filter((expense) => {
        const today = new Date();
        const lastSevenDay = calculateDay(today,7)
    return (expense.date > lastSevenDay) && (expense.date <= today)
    })
    return(
        <ExpensesOutput expenses={recentExpenses} period={"Last 7 days"} fallbackText={"No expenses registered for the last 7 days"} />
    )
}



const styles = StyleSheet.create({
    
})
