import { createContext, useReducer } from "react";



export const ExpenseContext = createContext({
    expense:[],
    deleteExpense:(id) => {},
    updateExpense:(id , { description , amount , date }) => {},
    setExpenses:(expense) => {},
    addExpense:({description , amount , date} ) => {}
})

function expenseReducer(currentState, action){
    switch (action.type){
        case 'SET':
          return action.payload
        case 'ADD':
        const new_id_generated = new Date().toString() + Math.random().toString();
        const Expense = [{...action.payload, id:new_id_generated }, ...currentState]
            return Expense
            
        case 'DELETE':
            const foundingExpense = currentState.filter((expense) => expense.id !== action.payload)
            return foundingExpense
        case 'UPDATE':
                                //             const currentState = [
                                //   { id: "e1", title: "Book",   amount: 20 },
                                //   { id: "e2", title: "Shoes",  amount: 50 },
                                //   { id: "e3", title: "Coffee", amount: 5  },
                                                // ];
            const foundIndexExpense = currentState.findIndex( (expense) => expense.id === action.payload.id); 
            //for example we looking for id:e2 to change with new info which has id:e2 as well. like:  const action = {
            //   type: "UPDATE",
            //   payload: {
            //     id: "e2",
            //     expenseData: { title: "Running Shoes", amount: 70 }
                     //   }
                     // };
            const foundedExpense = currentState[foundIndexExpense];
               // { id: "e2", title: "Shoes", amount: 50 }
            const newExpense = {...foundedExpense,...action.payload.data}
//             newExpense becomes:
// {
//   id: "e2",                 // kept from old
//   title: "Running Shoes",   // overwritten
//   amount: 70                // overwritten
// }
// 
            const oldArrayOfExpense = [...currentState]
                /*  Copy the whole list (so we don’t touch the original)
[
  { id: "e1", title: "Book",   amount: 20 },
  { id: "e2", title: "Shoes",  amount: 50 },
  { id: "e3", title: "Coffee", amount: 5  },
]
*/
            oldArrayOfExpense[foundIndexExpense] = newExpense
            /*
[
  { id: "e1", title: "Book",           amount: 20 },
  { id: "e2", title: "Running Shoes",  amount: 70 }, // replaced!
  { id: "e3", title: "Coffee",         amount: 5  },
]
*/
            return oldArrayOfExpense
            
        default:
            return currentState
        
    }

}










export default function ExpenseContextProvider({children}){
    
    const [expenseState, dispatch] = useReducer(expenseReducer, [])
    function addExpense(expenseData){
    dispatch({type:'ADD' , payload:expenseData})
}
    function updateExpense(id, expenseData){
    dispatch({type:'UPDATE' , payload:{id:id, data:expenseData}})
}
    function deleteExpense(id){
    dispatch({type:'DELETE', payload:id})
}
    function setExpenses(expense){
    dispatch({type:'SET', payload:expense})
}
const value = {
  expense:expenseState,
  addExpense:addExpense,
  setExpenses:setExpenses,
  updateExpense:updateExpense,
  deleteExpense:deleteExpense,
}

    return (
        <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
    )
}