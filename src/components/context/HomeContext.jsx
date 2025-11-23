import React,{useContext} from 'react'
import { GlobalContext } from './GlobalState'
import Child1 from './Child1';
import Child2 from './Child2';
export default function HomeContext() {
    // using context
    const {count,setCount} = useContext(GlobalContext);

    const increment = () =>setCount(prev=>prev+1)
    const decrement = () =>setCount(prev=>prev-1)
    const reset = () =>setCount(0)

  return (
    <div>
        <div>
            <h2>HomeContext</h2>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>-</button>
        </div>
        <div>
            <Child1/>
        </div>
        <div>
            <Child2/>
        </div>
    </div>
  )
}
