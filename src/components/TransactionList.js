import React, {useContext} from 'react'
import './TransactionList.css'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    return (
        <>
            <h3 className="transaction-lists-heading">History</h3>
            <ul className="transaction-lists">
                {
                    transactions.length !==0 ? transactions.map((transaction,index)=>(
                        <Transaction transaction={transaction} key={index}/>
                    )):(
                       <li style={{'fontSize':"14px"}}>Sorry! No records found.</li> 
                    )
                }
            </ul>
        </>
    )
}

export default TransactionList
