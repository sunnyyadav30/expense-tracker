import React, { useContext } from 'react'
import './IncomeExpenses.css'
import {GlobalContext} from '../context/GlobalState'

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction=>transaction.amount)
    const income = amounts.filter(amount=>amount>0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
    const expense = amounts.filter(amount=>amount<0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
    return (
        <div className="incomeExpenses">
            <div className="income">
                <h4>Income</h4>
                <p className="money plus">₹ {income}</p>
            </div>
            <div className="expense">
                <h4>Expense</h4>
                <p className="money minus">₹ {Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
