import { createContext, useReducer } from "react";
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
    const[expensesState, dispatch] = useReducer(expenseReducer)

    function addExpense({expenseData}) {
        dispatch({ type: 'ADD' , payload: expenseData})
    }
    
    function deleteExpense(id){
        dispatch({ type: 'DELETE', payload: id})
    }
}