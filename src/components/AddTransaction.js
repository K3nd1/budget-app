import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


const AddTransaction = () =>{
 const  {addIncome, addExpense} = useContext(GlobalContext)

    const[income, setIncome] = useState({
        incomeText: "",
        incomeAmount:0
    })
    const {incomeText,incomeAmount} = income

    const onChangeIncome = e =>{
        setIncome({...income,[e.target.name]: e.target.value})
    }
    const onSubmitIncome= e =>{
        e.preventDefault()

        if(incomeText !== ""){
            const newIncomeTransaction = {
                id: Date.now(),
                incomeText,
                incomeAmount: incomeAmount * 1
            }
            addIncome(newIncomeTransaction)
            setIncome({
                incomeText:"",
                incomeAmount:0
            })
        }

       
    }


    const[expense, setExpense] = useState({
        expenseText: "",
        expenseAmount:0
    })
    const {expenseText,expenseAmount} = expense

    const onChangeExpense = e =>{
        setExpense({...expense,[e.target.name]: e.target.value})
    }
    const onSubmitExpense = e => {
        e.preventDefault()

        if(expenseText !== ""){
            const newExpenseTransaction = {
                id: Date.now(),
                expenseText,
                expenseAmount: expenseAmount * 1
            }
            addExpense(newExpenseTransaction)
            setExpense({
                expenseText: "",
                expenseAmount:0
            })
        }

       
    }

    return(
        <div className="form-wrapper">
                <form onSubmit={onSubmitIncome}>
                    <div className="input-group income">
                        <input type="text" 
                        name="incomeText"
                        value={incomeText}
                        placeholder="Add Income..."  
                        autoComplete="off" 
                        onChange={onChangeIncome}/>

                        <input type="number" 
                        name="incomeAmount"
                        value={incomeAmount}
                        placeholder="Amount"  
                        autoComplete="off" 
                        onChange={onChangeIncome}/>

                        <input type="submit" value="Submit"/>
                    </div>
                </form>
                <form onSubmit={onSubmitExpense}>
                    <div className="input-group expense">
                        <input 
                        name="expenseText"
                        value={expenseText}
                        type="text" 
                        placeholder="Add Expense..."  
                        autoComplete="off"
                        onChange={onChangeExpense}
                        />
                        <input 
                        name="expenseAmount"
                        type="number" 
                        value={expenseAmount}
                        placeholder="Amount"  
                        autoComplete="off"
                        onChange={onChangeExpense}
                        />
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
        </div>
    )
}

export default AddTransaction