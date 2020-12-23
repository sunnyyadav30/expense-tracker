import React, {useState,useContext} from 'react'
import './AddTransaction.css'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount,setAmount] = useState('')
    const submitTransaction = e=>{
        e.preventDefault()
        addTransaction({
            id:Math.floor(Math.random()*1000000),
            text:text,
            amount: +amount})
    }
    return (
        <div className="addTransaction">
            <h3>Add new transaction</h3>
            <form onSubmit={submitTransaction}>
                <div className="form-control">
                    <label>Expense source OR Income source</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter here..." required/>
                </div>
                <div className="form-control">
                    <label>Amount (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." required/>
                </div>
                <div className="form-control">
                    <button type="submit">Add transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction