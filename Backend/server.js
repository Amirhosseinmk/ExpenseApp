import axios from "axios";

export function storeExpense(dataExpense,id){
    axios.post("https://expense-app-d2035-default-rtdb.firebaseio.com/expenses.json",dataExpense)
    axios.put("https://expense-app-d2035-default-rtdb.firebaseio.com/expenses.json",id,dataExpense)
}