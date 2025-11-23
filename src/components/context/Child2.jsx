import { useContext } from "react";
import { GlobalContext } from "./GlobalState";


const Child2 = () => {
    const {count,setCount} = useContext(GlobalContext);

  return (
    <div>
        <h2>Child2 Component</h2>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Child2