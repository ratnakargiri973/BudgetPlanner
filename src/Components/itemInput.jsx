import React, { useState } from "react";
import { useContext } from "react";
import { BudgetContext } from "./context/context";
import './itemInput.css'

function itemInput(){
    const {items, setItems,remainingAmount} = useContext(BudgetContext);
    const [itemName, setItemName] = useState('');
    const [itemCost, setItemCost] = useState('');

    function handleAddItems(){
           const newItems = {
            name:itemName,
            cost:itemCost
           }

           const updatedItems = [...items, newItems];
           setItems(updatedItems);

        localStorage.setItem("items", JSON.stringify(updatedItems))
        setItemName('');
        setItemCost('');
    }
    function handleSave(){
        const totalSpent = items.reduce((total, item) => total + parseFloat(item.cost), 0);

        if((remainingAmount - totalSpent) <= 0){
            alert("Out of Budget !!!");
            setItemName('');
            setItemCost('');
        }
        else{
            handleAddItems();
        }
    }
    
    return(
        <>
        <div className="inputSection">
            <h1>Add Expenses</h1>
            <div className="itemInput">
                <div className="input">
            <h3>Name</h3>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName} // Show items as a comma-separated string for simplicity
                    onChange={(e) => setItemName(e.target.value)}
                />
            </div>
            <div className="input">
                <h3>Cost</h3>
                <input
                    type="number"
                    placeholder="Item Cost"
                    value={itemCost} // Show costs as a comma-separated string
                    onChange={(e) => parseInt(e.target.value)>0 ? setItemCost(parseInt(e.target.value)): alert('Negative value not allowed!!!')}
                />
                </div>
                </div>
                <button onClick={handleSave}>save</button>
        </div>
            </>
    )
}
export default itemInput;