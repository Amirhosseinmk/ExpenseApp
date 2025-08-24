import React ,{useContext} from "react";
import { View, Text , StyleSheet} from "react-native"
import ExpensesOutput from "../components/ExpensesShare/ExpensesOutput";
import { ExpenseContext } from "../contex/ExpenseCtx";




export default function AllExpense(){
     const expensesCtx = useContext(ExpenseContext);
    return(
        <ExpensesOutput expenses={expensesCtx.expense} Period={"Total"} fallbackText={"No registered expenses found"}/> 
    )
}



const styles = StyleSheet.create({
    container:{
     

    }
})
