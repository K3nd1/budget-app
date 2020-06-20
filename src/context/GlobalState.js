import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState= {
    incomeTransactions: JSON.parse(localStorage.getItem('incomeTransaction')) || [],
    expenseTransactions: JSON.parse(localStorage.getItem('expenseTransaction')) || []
}


export const GlobalContext = createContext(initialState)

export const GlobalContextProvider =({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState)


    useEffect(() =>{
        localStorage.setItem(" incomeTransactions", JSON.stringify(state.incomeTransaction))
        localStorage.setItem(" expenseTransactions", JSON.stringify(state.expenseTransaction))
    })

    const addIncome = (incomeTransaction) => {
        dispatch({
            type: "ADD_INCOME",
            payload: incomeTransaction,
        })
    }

    const addExpense = (expenseTransaction) => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expenseTransaction,
        })
    }

    const deleteTransaction = (id) =>{
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:id
        })
    }

    return(
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}