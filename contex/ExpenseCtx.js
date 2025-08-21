import { createContext, useContext, useReducer } from "react";




export const ExpenseContex = useContext({
    expense:[],
    deleteExpense:(id) => {},
    updateExpense:(id , { description , amount , date }) => {},
    addExpense:({description , amount , date} ) => {}
})

function expenseReducer(currentState, action){
    switch (action.type){
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
            const foundIndexExpense = currentState.findIndex( (expense) => {expense.id === payload.id}); 
            //for example we looking for id:e2 to change with new info which has id:e2 as well. like:  const action = {
            //   type: "UPDATE",
            //   payload: {
            //     id: "e2",
            //     expenseData: { title: "Running Shoes", amount: 70 }
                     //   }
                     // };
            const foundedExpense = currentState[foundIndexExpense];
               // { id: "e2", title: "Shoes", amount: 50 }
            const newExpense = [...foundedExpense,...action.payload.expenseData]
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
            return newExpense
            
        default:
            return currentState
        
    }

}

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









function ExpenseProvider({children}){
    
    const [expenseState, dispatch] = useReducer(expenseReducer, Dummy_data)
    function addExpense(expenseData){
    dispatch({type:'ADD' , payload:expenseData})
}
    function updateExpense(id, expenseData){
    dispatch({type:'UPDATE' , payload:{id:id, data:expenseData}})
}
    function deleteExpense(id){
    dispatch({type:'DELETE', payload:id})
}

    return (
        <ExpenseContex.Provider>{children}</ExpenseContex.Provider>
    )
}