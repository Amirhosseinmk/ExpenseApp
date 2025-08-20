import React from "react";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./expensesList";
import { View , StyleSheet} from "react-native";

export default function ExpensesOutput({ expenses, period }) {
  const Dummy_data = [
    {
      id: "1",
      description: "Tshirt",
      amount: 450.99,
      date: new Date(2025, 11, 9),
    },
    {
      id: "2",
      description: "board game",
      amount: 54.8,
      date: new Date(2025,5,12),
    },
    {
      id: "3",
      description: "Camera",
      amount: 400,
      date: new Date(2022,2,1),
    },
    {
      id: "4",
      description: "Pizza",
      amount: 12,
      date: new Date(2019,10,1),
    },
    {
      id: "5",
      description: "Shirt",
      amount: 40.57,
      date: new Date(2025,3,9),
    },
  ];
  return (
    <View style={styles.container}>
      <ExpensesSummery onPeriod={period} expenses={Dummy_data} />
      <ExpensesList expenses={Dummy_data} />
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