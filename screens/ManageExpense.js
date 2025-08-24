import React, { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import ButtonIcons from "../components/UI/Icon";
import { ExpenseContext } from "../contex/ExpenseCtx";
import Form from "../Form/Form";
import { storeExpense } from "../Backend/server";

export default function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }

  function confirmationHandler(Data) {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId,Data);
    } else {
      storeExpense(Data)
      expenseCtx.addExpense(Data);
    }
    navigation.goBack();
  }


const selectedExpense = expenseCtx.expense.find((expense) => expense.id === editedExpenseId)




  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <Form
        onCancel={cancelHandler}
        onSubmit={confirmationHandler}
        HandleBtwAddAndUpdate={isEditing ? "Update" : "Add"}
        preFilled={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <ButtonIcons
            name={"trash"}
            color={"#9b095c"}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#200364",
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    borderTopColor: "#a281f0",
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
