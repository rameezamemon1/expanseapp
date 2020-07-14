import React,{useContext, useState} from 'react';
import {TransactionContext} from './transContext';

export const Header = () => {
    let {transaction,addTransaction,deleteTransaction }= useContext(TransactionContext);
    console.log(transaction)
    let[newDesc,setDesc]=useState("");
    let[newAmount,setAmount]=useState(0);
    
const handleAddition =(e)=>{
e.preventDefault();
if(Number(newAmount)===0){
    alert("Please Enter Valid Amount")
    return false;
}
addTransaction({
    amount:Number(newAmount),
    desc:newDesc,
    id:Math.floor(Math.random() * 100000000),

})
setDesc(' ');
setAmount(' ');
}

const getIncome = ()=>{
    let income = 0;
    for(var i = 0; i < transaction.length; i++){
        if(transaction[i].amount>0)
        income+= transaction[i].amount;
    }
    return income;
}
const getExpanse = ()=>{
    let expanse = 0;
    for(var i = 0; i < transaction.length; i++){
        if(transaction[i].amount<0)
        expanse+= transaction[i].amount;
    }
    return expanse;
}


    return (
        <div className="container">
            <h1 className="text-center">Expanse Tracker</h1>
      <br />
    <h3 >Your Balance <br />{getIncome() - getExpanse()}Rs</h3>
            <br />   
            <div className="expense-container">
                <h3>INCOME<br />{getIncome()}Rs</h3>
    <h3>EXPANSE<br />{getExpanse()}Rs</h3>

            </div>
            <br />
            <h3>History</h3>
            <hr />
            <ul className="trnsaction-list">
                {transaction.map((tranObj) => {
                    return(
                        <li key={tranObj.id}>              
                    <span>{tranObj.desc}</span>
                    <span>{tranObj.amount}</span>
                    <button
                    onClick={() => deleteTransaction(tranObj.id)} 
                    className ="delete-btn">x</button>
                        </li>
                    )
                })}
                
            </ul>
            <form className="transaction-form" onSubmit={handleAddition}>
           
                <label>
                    Enter Description 
                </label>   <br />
                    <input
                     type="test" 
                     value={newDesc}
                     placeholder=" Description"
                     onChange={(ev)=>setDesc(ev.target.value)}
                     required
                     /> 

                <br />
                <label>
                    Enter Amount <br/>
                    </label>   <br />
                    <input
                     type="number"
                     value={newAmount}
                     placeholder=" Amount"
                     onChange={(ev)=>setAmount(ev.target.value)}
                     required
                    /> 

             
                <br />
                <input
                 type="submit" 
                 value="Add Transaction" />
            </form>
        </div>
    )
}
