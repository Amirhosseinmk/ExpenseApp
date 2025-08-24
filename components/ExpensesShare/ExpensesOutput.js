import React from "react";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./expensesList";
import { View , StyleSheet, Text} from "react-native";

export default function ExpensesOutput({ expenses, Period, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={expenses} onPeriod={Period} />
      {content}
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
      color:"#fff",
      fontSize:19,
      textAlign:'center',
      marginTop:100
    }

})