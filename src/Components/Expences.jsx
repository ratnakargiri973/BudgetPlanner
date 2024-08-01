import React from "react";
import { BudgetContext } from "./context/context";
import { useContext } from "react";
import './Expenses.css'

function Expenses(){
    const {items, setItems} = useContext(BudgetContext);


    function deleteItem(id){
        const updatedItems = items.filter((item,index)=>index != id);
        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    }

    return (
        <>
        <div className="expenses">
            <h1>Expenses</h1>
            <div className="purcesedItems">
                <h2>Items</h2>
                {items.length === 0 ? (
                        <h2 style={{color:"lightgreen"}}>Add data to list ...</h2>
                    ) : (
                        items.map((item, index) => (
                            <div key={index} className="item">
                                <p>{item.name}</p>
                                <span>
                                    <p>{item.cost}</p>
                                    <button onClick={() => deleteItem(index)}>x</button>
                                </span>
                            </div>
                        ))
                    )}
            </div>
        </div>
        </>
    )
}
export default Expenses;