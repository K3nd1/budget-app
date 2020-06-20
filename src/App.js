import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'
import {GlobalContextProvider} from './context/GlobalState'

const App =() =>{
    return (
        <GlobalContextProvider>
        <div className="container"> 
        <div className="app-wrapper">
              <Header/> 
              <Balance/> 
              <AddTransaction/>
              <IncomeList/>
              <ExpenseList/>
        </div>
        </div>
        </GlobalContextProvider>
    )
}


export default App