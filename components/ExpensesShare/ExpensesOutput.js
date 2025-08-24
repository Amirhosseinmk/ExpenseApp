import React from "react";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./expensesList";
import { View , StyleSheet} from "react-native";

export default function ExpensesOutput({ expenses, period,fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>
  if (expenses.length > 0){
    content = <ExpensesList expenses={expenses} />
  }
  
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
    },
    infoText:{
      color:"white",
      fontSize:16,
      textAlign:'center',
      marginTop:32
    }

})