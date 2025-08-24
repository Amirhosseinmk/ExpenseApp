import axios from "axios";
const Backend_URL = "https://expense-app-d2035-default-rtdb.firebaseio.com"
export function storeExpense(dataExpense){
    // const fixedExpense ={
    //     ...dataExpense,
    //     date: new Date(dataExpense.date).toISOString(),
    // }
    axios.post(Backend_URL + "/expenses.json",dataExpense)
}



export async function Get_Data(){
    const response = await axios.get( Backend_URL + "/expenses.json");
    const expenses = []
    for (const key in response.data){
        const ExpenseObj = {
            id: key,
            amount : response.data[key].amount,
            date : new Date(response.data[key].date),
            description : response.data[key].description
        }
        expenses.push(ExpenseObj)
    }
    return expenses
}