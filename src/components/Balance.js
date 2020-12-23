import React, { useContext } from 'react'
import './balance.css'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction=>transaction.amount)
    const total = amounts.reduce((total,item)=>(total+=item),0).toFixed(2)
    return (
        <div className="balance">
            <h4>Total Balance</h4>
            <h2>₹ {total}</h2>
        </div>
    )
}

export default Balance