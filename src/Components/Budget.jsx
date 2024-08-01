import React, { useContext, useEffect, useState } from "react";
import { BudgetContext } from "./context/context";
import './Budget.css'

function Budget(){
    const {items,remainingAmount,spentAmount,setSpentAmount} = useContext(BudgetContext);
    

    useEffect(()=>{
        const updatedSpentAmount = items.reduce((total, item) => {
            const cost = parseFloat(item.cost); // Convert cost to a number
            return total + (isNaN(cost) ? 0 : cost); // Handle non-numeric values
        }, 0);
        setSpentAmount(updatedSpentAmount);
        localStorage.setItem("spent", JSON.stringify(spentAmount));
        
    },[items]);
        
   const remaining = remainingAmount - spentAmount;

    return (
        <>
        <div className="budget">
            <h1>My Budget planner</h1>
            <div className="budgetPlan">
                <h2 style={{color:"gray", backgroundColor:"azure"}}>Budget:2000</h2>
                <h2 style={{color:"green", backgroundColor:"azure"}}>Remaining:{remaining}</h2>
                <h2 style={{color:"brown", backgroundColor:"cadetblue"}}>Spent so far:{spentAmount}</h2>
            </div>
        </div>
        </>
    )
}
export default Budget;