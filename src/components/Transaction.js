import React, {useContext} from 'react'
import './Transaction.css'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={transaction.amount < 0 ? 'transaction-list minus' : 'transaction-list plus'}>
            {transaction.text}
            <span>{sign+'₹ '+Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
export default Transaction