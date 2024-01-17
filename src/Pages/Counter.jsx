import { useSelector, useDispatch } from "react-redux"
import { inc, dec, reset, incbyAmount } from "../Features/Counter/counterSlice"
import { useState } from "react"


const Counter = () => {

    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
    const [incAmount, setIncAmount] = useState(0)
    const addValue = Number(incAmount)|| 0
    const resetAll = () => {
        setIncAmount(0)
        dispatch(reset())
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch(inc())}>+</button>
      <button onClick={()=>dispatch(dec())}>-</button>
      <button onClick={()=> resetAll()}>reset</button>
      <input type="number" value={incAmount} onChange={(e)=> setIncAmount(e.target.value)} />
      <button onClick={()=> dispatch(incbyAmount(addValue))}>Add Amount</button>
    </div>
  )
}

export default Counter

