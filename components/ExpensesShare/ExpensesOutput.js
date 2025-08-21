import React from "react";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./expensesList";
import { View , StyleSheet} from "react-native";

export default function ExpensesOutput({ expenses, period }) {
  
  return (
    <View style={styles.container}>
      <ExpensesSummery onPeriod={period} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2d0689',
        flex:1,
        paddingHorizontal:24,
        paddingBottom:0
    }
})