import React from "react";

import { View, Text, FlatList } from "react-native";
import ExpensesItem from "./ExpensesItem";

export default function ExpensesList({ expenses }) {
  function functionHandler(itemData) {
    return (
      <ExpensesItem
        description={itemData.item.description}
        date={itemData.item.date}
        amount={itemData.item.amount}
        id={itemData.item.id}
      />
    );
  }
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={functionHandler}
    />
  );
}
