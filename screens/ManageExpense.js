import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonIcons from "../components/UI/Icon";
import Button from "../components/UI/Button"
import ExpenseContex from ".../"

export default function ManageExpense({ route, navigation }) { 
  const expenseCtx = useContext(ExpenseContex)
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  function deleteExpenseHandler() {
    navigation.goBack()
  }
  function cancelHandler(){
     navigation.goBack()
  }
  function confirmationHandler(){
    navigation.goBack()
  }





  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);




  return (
    <View style={styles.container}>
        <View style={styles.buttons}>
            <Button mode="flat" onPress={cancelHandler}>Cancel</Button>
            <Button onPress={confirmationHandler}>{isEditing ? "Update" : 'Add'}</Button>
        </View>
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
  buttons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});
