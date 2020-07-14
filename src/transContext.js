import React,{createContext,useReducer} from "react"
import TransactionReducer from "./transReducer";

const initialTransaction = [
    
]

export const TransactionContext = createContext(initialTransaction);


export const TransactionProvider = ({children}) => {
let [state,dispatch] = useReducer(TransactionReducer,initialTransaction)    

        function addTransaction(tranObj){
            dispatch({
                type:"ADD_TRANSACTION",
                payload:{
                    amount: tranObj.amount,
                    desc: tranObj.desc,
                    id: tranObj.id
                },
            })
        } 
        function deleteTransaction(id){
            dispatch({
                type:"DELETE_TRANSACTION",
                payload: id

            })
        }  
        return (
            <TransactionContext.Provider value={{
                transaction:state,
                addTransaction,
                deleteTransaction
            }}>
                {children}

            </TransactionContext.Provider>
        )}
