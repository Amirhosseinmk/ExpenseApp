import { createContext, useReducer } from "react";

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



const expenseContex = createContext({
    expenses:[],
    addExpense:({description,amount,date}) => {},
    deleteExpenses:(id) => {},
    updateExpense:(id,{description,amount,date }) => {}
});


function expenseReducer(state,action){
    switch(action.type){
        case 'ADD':
        case 'UPDATE':
        case 'DELETE':
        default:
            return state
    }
}

function ExpensesContextProvider({ children }){
    const[expensesState, dispatch] = useReducer(expenseReducer,Dummy_data)

    function addExpense({expenseData}) {
        dispatch({ type: 'ADD' , payload: expenseData})
    }
    
    function deleteExpense(id){
        dispatch({ type: 'DELETE', payload: id})
    }
}