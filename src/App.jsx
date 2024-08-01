import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Budget from './Components/Budget'
import Expenses from './Components/Expences'
import ItemInput from './Components/itemInput'
import { BudgetContext } from './Components/context/context'

function App() {
  const previousitems = JSON.parse(localStorage.getItem("items")) || [];
  const [items, setItems] = useState(previousitems);
  const [remainingAmount, setRemainingAmount] = useState(2000);
    const [spentAmount, setSpentAmount] = useState(0);
  // const [cost, setCost] = useState([])

  return (
    <div style={{width:"100%" ,display:"flex", justifyContent:"center",alignItems:"center"}}>
    <BudgetContext.Provider value = {{items,setItems,remainingAmount,setRemainingAmount,spentAmount,setSpentAmount}}>
    <div className='budgetHome'>
      <Budget />
      <Expenses />
      <ItemInput />
    </div>
    </BudgetContext.Provider>
    </div>
  )
}

export default App
